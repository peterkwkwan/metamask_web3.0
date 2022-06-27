import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { chainIdMap } from 'src/constants/chainIdMap';

interface Props {
    accountAddress: string;
}

export const WalletBalance = ({ accountAddress }: Props) => {
    const [ethereumBalance, setEthereumBalance] = useState<undefined | string>(
        undefined,
    );

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const connectWallet = async () => {
            const { chainId } = await provider.getNetwork();
            if (!chainIdMap.get(chainId.toString())) return;

            try {
                const balance = await provider.getBalance(accountAddress);
                const bal = ethers.utils.formatEther(balance);
                setEthereumBalance(bal);
            } catch (error) {
                console.error(error);
            }
        };
        connectWallet();
    }, [accountAddress]);

    return <div>Ethereum Balance: {ethereumBalance}</div>;
};
