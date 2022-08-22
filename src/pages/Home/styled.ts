import styled from 'styled-components';
import presentationBackground from '../../assets/images/presentationBackground.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100vh);
    width: 100vw;

    background-color: ${({ theme }) => theme.palette.lightYellow};
    overflow-x: hidden;
`;

export const PresentationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 50px;
    width: 100%;
    text-align: center;
    height: 200px;
    text-transform: uppercase;
`;

export const PresentationName = styled.div`
    font-size: 65px;
`;

export const PresentationContainer = styled.div`
    width: 100%;
    height: 100%;

    background: url(${presentationBackground});
    background-position: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const DiagonalStrip = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.red};
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.lightYellow};
    transform: rotate(-27.76deg);
    height: 60px;
    width: 200%;
    margin-top: -220px;
    margin-left: -100px;
    font-size: 37px;
    z-index: 1;
`;
