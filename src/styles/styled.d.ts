import 'styled-components';

interface IPalette {
    main: string;
    light: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        boxShadow: string;
        palette: {
            common: {
                white: string;
                black: string;
            };
            primary: IPalette;
            secondary: IPalette;
        };
    }
}
