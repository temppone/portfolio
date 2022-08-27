import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 10px;

    background-color: ${({ theme }) => theme.palette.darkBlue};
    border: solid 3px ${({ theme }) => theme.palette.black};
    cursor: pointer;

    &:hover {
        box-shadow: 5px 5px;
    }
`;
