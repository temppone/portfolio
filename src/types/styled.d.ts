import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: IColors;
        breakpoints: IBreakpoints;
        fontSizes: IFontSizes;
    }

    interface IColors {
        white: string;
        black: string;
        lightYellow: string;
        darkBlue: string;
        red: string;
        lightPink: string;
    }

    interface IBreakpoints {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        sl: string;
    }

    interface IFontSizes {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        sl: string;
    }
}
