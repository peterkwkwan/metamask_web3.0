import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ThemeProvider } from 'styled-components';
import { Content } from './container/Content';
import { Navbar } from './container/Navbar';
import { defaultTheme, GlobalStyle } from './styles/global';
import { chainIdMap } from './constants/chainIdMap';

export default function App() {
    const [connectedMetamask, setConnectedMetamask] = useState(false);
    const [unsupportedNetwork, setUnsupportedNetwork] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');

    const handleAddressChange = (address: string) => {
        setAccountAddress(address);
    };

    const checkIfNetworkSupported = async () => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const { chainId } = await provider.getNetwork();

        if (!chainIdMap.get(chainId)) {
            setConnectedMetamask(false);
            setUnsupportedNetwork(true);
        }
    };

    const getDetails = async () => {
        try {
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);

            const signer = provider.getSigner();
            const addr = await signer.getAddress();

            setAccountAddress(addr.toString());
            setConnectedMetamask(true);
        } catch (error) {
            setConnectedMetamask(false);
        }
    };

    useEffect(() => {
        const { ethereum } = window;
        if (ethereum) {
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
            window.ethereum.on('accountsChanged', () => {
                window.location.reload();
            });
        }
    });

    useEffect(() => {
        const checkIfConnected = async () => {
            const { ethereum } = window;

            if (ethereum) {
                checkIfNetworkSupported();
                getDetails();
            }
        };
        checkIfConnected();
    }, []);

    window.ethereum.on('accountsChanged', () => {
        getDetails();
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Navbar />
            <Content
                connectedMetamask={connectedMetamask}
                unsupportedNetwork={unsupportedNetwork}
                handleAddressChange={handleAddressChange}
                accountAddress={accountAddress}
            />
        </ThemeProvider>
    );
}
