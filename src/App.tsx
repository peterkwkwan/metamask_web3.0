import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/global';

const Button = styled.button`
    border-radius: ${(props) => props.theme.borderRadius};
`;

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Button type="button">Connect to MetaMask</Button>
        </ThemeProvider>
    );
}
