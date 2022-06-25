import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Content } from './container/Content';
import { Navbar } from './container/Navbar';
import { defaultTheme, GlobalStyle } from './styles/global';

export default function App() {
    const [connectedMetamask, setConnectedMetamask] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');

    const handleAddressChange = (address: string) => {
        setAccountAddress(address);
    };

    useEffect(() => {
        const { ethereum } = window;
        const checkIfConnected = async () => {
            setConnectedMetamask(!!ethereum);
            if (ethereum) handleAddressChange(ethereum.selectedAddress);
        };
        checkIfConnected();
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Navbar />
            <Content
                connectedMetamask={connectedMetamask}
                handleAddressChange={handleAddressChange}
                accountAddress={accountAddress}
            />
        </ThemeProvider>
    );
}
