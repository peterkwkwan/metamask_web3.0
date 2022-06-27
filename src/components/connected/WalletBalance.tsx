import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { chainIdMap } from 'src/constants/chainIdMap';
import { coinNameMap } from 'src/constants/coinNameMap';
import { CoinIcon } from './CoinIcon';

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
    const [coin, setCoin] = useState('');

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const getBalance = async () => {
            const { chainId } = await provider.getNetwork();
            if (!chainIdMap.get(chainId.toString())) return;

            try {
                const rawBalance = await provider.getBalance(accountAddress);
                const balance = ethers.utils.formatEther(rawBalance);
                const coinName = coinNameMap.get(chainId);
                setEthereumBalance(balance);
                setCoin(coinName || '');
            } catch (error) {
                console.error(error);
            }
        };
        getBalance();
    }, [accountAddress]);

    return (
        <Container>
            <CoinIcon coin={coin} />
            <Balance>
                Balance: <Amount>{ethereumBalance} </Amount>
                <Coin>{coin}</Coin>
            </Balance>
        </Container>
    );
};
