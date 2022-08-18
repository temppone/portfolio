import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.palette.white};
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;
