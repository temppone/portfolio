import styled, { css } from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 12px;
    width: 100%;
    height: 67px;

    ${({ theme }) => css`
        background-color: ${theme.palette.white};
        border-bottom: solid 5px ${theme.palette.black};
    `}
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;
