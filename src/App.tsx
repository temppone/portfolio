import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './shared/global';
import { defaultTheme } from './shared/theme';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Suspense fallback={<div>Carregando</div>}>
                <ThemeProvider theme={defaultTheme}>
                    <Router>
                        <Header items={items} />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </Suspense>
        </div>
    );
};

export default App;
