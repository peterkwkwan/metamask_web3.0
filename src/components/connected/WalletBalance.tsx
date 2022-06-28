import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import {
    chainIdMap,
    ChainName,
    exchangeAssetMap,
} from 'src/constants/chainIdMap';
import { Coin } from 'src/types/coinstats';
import { ChainIcon } from './ChainIcon';
import { Button, VARIANT } from '../Button';

interface Props {
    accountAddress: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Balance = styled.p`
    margin: 8px 0;
    font-size: 24px;
    color: ${(props) => props.theme.palette.text.light};
`;

const Amount = styled.span`
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 32px;
    font-weight: 600;
`;
const BalanceType = styled.span`
    color: ${(props) => props.theme.palette.text.main};
    font-size: 32px;
`;

const BalanceButton = styled(Button)`
    width: 250px;
    justify-content: center;
`;

export const WalletBalance = ({ accountAddress }: Props) => {
    const [ethereumBalance, setEthereumBalance] = useState<number>(0);
    const [chainName, setChainName] = useState<ChainName | undefined>();
    const [USDActive, setUSDActive] = useState(false);

    const prevBalanceRef = useRef(0);
    const USDRateRef = useRef(0);

    const provider = useMemo(
        () => new ethers.providers.Web3Provider(window.ethereum),
        [],
    );

    const getBalance = useCallback(async () => {
        const { chainId } = await provider.getNetwork();

        try {
            const rawBalance = await provider.getBalance(accountAddress);
            const balance = Number(ethers.utils.formatEther(rawBalance));
            const name = chainIdMap.get(chainId);
            if (balance !== prevBalanceRef.current) {
                // only call setState on balance if diff from previous balance
                // balance may not change on each new block because there can be no related transactions
                prevBalanceRef.current = balance;
                setEthereumBalance(balance);
            }
            setChainName((name as ChainName) || undefined);
        } catch (error) {
            console.error(error);
        }
    }, [provider, accountAddress]);

    useEffect(() => {
        getBalance();
    }, [getBalance]);

    useEffect(() => {
        // subscribe to ether's block event to listen to balance changes
        // "block"	blockNumber	emitted when a new block is mined
        // https://docs.ethers.io/v5/api/providers/provider/#Provider--events
        provider.on('block', getBalance);
        return () => {
            provider.off('block', getBalance);
        };
    }, [getBalance, provider]);

    useEffect(() => {
        const fetchUSDRate = async () => {
            const { chainId } = await provider.getNetwork();
            const asset = exchangeAssetMap.get(chainId);

            fetch(
                `https://api.coinstats.app/public/v1/coins/${asset}?currency=USD`,
            )
                .then((res) => res.json())
                .then(({ coin }: { coin: Coin }) => {
                    USDRateRef.current = coin.price;
                });
        };
        fetchUSDRate();
    }, []);

    const toTwoDecimals = (num: number) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    };

    const handleClick = () => {
        setUSDActive((prevState) => !prevState);
    };

    return (
        <Container>
            <ChainIcon chainName={chainName} />
            <Balance>
                Balance:{' '}
                <Amount>
                    {USDActive
                        ? toTwoDecimals(ethereumBalance * USDRateRef.current)
                        : toTwoDecimals(ethereumBalance)}
                </Amount>
                <BalanceType> {USDActive ? 'USD' : chainName}</BalanceType>
            </Balance>
            <BalanceButton onClick={handleClick} variant={VARIANT.PRIMARY}>
                {USDActive ? `Switch to ${chainName}` : 'Switch to USD'}
            </BalanceButton>
        </Container>
    );
};
