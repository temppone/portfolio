import styled, { css } from 'styled-components';

export const Language = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme, isActive }) => css`
        color: ${theme.palette.black};
        font-size: ${theme.fontSizes.xl};
        line-height: 0.9;
        border-bottom: ${isActive ? `solid 5px ${theme.palette.black}` : ''};
    `}
`;
