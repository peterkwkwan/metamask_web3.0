import { ThemeProvider } from 'styled-components';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { defaultTheme } from './styles/global';

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar />
            <Content />
        </ThemeProvider>
    );
}
