import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { chainIdMap, ChainName } from 'src/constants/chainIdMap';
import { ChainIcon } from './ChainIcon';

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
    margin: 8px 0 0;
    font-size: 24px;
    color: ${(props) => props.theme.palette.text.light};
`;

const Amount = styled.span`
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 32px;
    font-weight: 600;
`;
const Coin = styled.span`
    color: ${(props) => props.theme.palette.text.main};
    font-size: 32px;
`;

export const WalletBalance = ({ accountAddress }: Props) => {
    const [ethereumBalance, setEthereumBalance] = useState<undefined | string>(
        undefined,
    );
    const [chainName, setChainName] = useState<ChainName | undefined>();
    const prevBalanceRef = useRef('');

    const provider = useMemo(
        () => new ethers.providers.Web3Provider(window.ethereum),
        [],
    );

    const getBalance = useCallback(async () => {
        const { chainId } = await provider.getNetwork();

        try {
            const rawBalance = await provider.getBalance(accountAddress);
            const balance = ethers.utils.formatEther(rawBalance);
            const name = chainIdMap.get(chainId);
            if (balance !== prevBalanceRef.current) {
                // only call setState on balance if diff from previous balance
                // balance may not change on each new block because there can be no related transactions
                prevBalanceRef.current = balance;
                setEthereumBalance(balance);
                setChainName((name as ChainName) || undefined);
            }
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

    return (
        <Container>
            <ChainIcon chainName={chainName} />
            <Balance>
                Balance: <Amount>{ethereumBalance} </Amount>
                <Coin>{chainName}</Coin>
            </Balance>
        </Container>
    );
};
