import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Header />
            </ThemeProvider>
        </div>
    );
};

export default App;
