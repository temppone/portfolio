import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './shared/global';
import { defaultTheme } from './shared/theme';

const App = () => {
    const { t } = useTranslation();

    const items = [
        {
            label: t('Menu.Home'),
            path: '/',
        },

        {
            label: t('Menu.About'),
            path: '/about',
        },

        {
            label: t('Menu.Experiencies'),
            path: '/experiencies',
        },

        {
            label: t('Menu.Projects'),
            path: '/projets',
        },

        {
            label: t('Menu.Contact'),
            path: '/contact',
        },
    ];

    return (
        <div className="App">
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Header items={items} />
            </ThemeProvider>
        </div>
    );
};

export default App;
