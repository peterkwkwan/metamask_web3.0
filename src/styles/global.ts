import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    borderRadius: '12px',
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
    palette: {
        common: {
            black: '#000',
            white: '#FFF',
        },
        primary: {
            main: '#2D84EB',
            light: 'rgba(45,132,235,0.1)',
        },
        secondary: {
            main: '#D50066',
            light: 'rgba(213,0,102,0.1)',
        },
    },
};

export default createGlobalStyle`
  * {
    font-family: Inter, -apple-system, 'Segoe UI', Roboto, Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
  }
`;