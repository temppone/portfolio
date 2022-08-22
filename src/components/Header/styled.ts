import styled, { css } from 'styled-components';
import { slideDown } from '../../shared/keyframes';

export const HeaderContainer = styled.div<{ isActive: boolean }>`
    ${({ isActive, theme }) => css`
        background-color: ${isActive ? `${theme.palette.black}70` : 'none'};
        width: 100vw;
        height: ${isActive ? '100vh' : '67px'};
        position: fixed;
        z-index: 2;
    `}
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 67px;

    ${({ theme }) => css`
        background-color: ${theme.palette.white};
        border-bottom: solid 5px ${theme.palette.black};
        color: ${theme.palette.black};
        font-size: ${theme.fontSizes.xl};
        text-transform: uppercase;
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    animation: ${slideDown} 300ms;

    ${({ theme }) => css`
        border-bottom: solid 5px ${theme.palette.black};
    `}

    ${({ theme, isOpen }) => css`
        background-color: ${theme.palette.white};
        display: ${isOpen ? 'flex' : 'none'};
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
        flex-direction: row;
        animation: none;
        height: 67px;
    }
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: space-between;
        flex-direction: row;
        gap: 40px;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    width: 100%;

    ${({ theme }) => css`
        background-color: ${theme.palette.white};
        color: ${theme.palette.black};
        font-size: ${theme.fontSizes.xl};
        text-transform: uppercase;
    `}

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;

        &:last-child {
            align-self: flex-end;
            justify-content: flex-end;
            padding-right: 24px;
        }

        &:first-child {
            margin-left: 40px;
        }
    }
`;
