import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    palette: {
        white: '#ffffff',
        black: '#000000',
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
        sl: '1441px',
    },

    fontSizes: {
        xs: '12px',
        sm: '16px',
        md: '18px',
        lg: '22px',
        xl: '26px',
        sl: '30px',
    },
} as const;
