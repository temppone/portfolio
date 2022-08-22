import styled, { css } from 'styled-components';
import presentationBackground from '../../assets/images/presentationBackground.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.lightYellow};

    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 67px);
    margin-top: 67px;
    width: 100vw;

    background-color: transparent;

    border: solid red 3px;
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
    height: 100vh;
    background: url(${presentationBackground});
    background-position: center;

    img {
        margin-top: -67px;
    }
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
    color: ${({ theme }) => theme.palette.red};
    transform: rotate(-27.76deg);
    height: 60px;
    width: 200%;
    margin-top: -159px;
    margin-left: -100px;
    font-size: 37px;
    z-index: 1;

    ${({ theme }) => css`
        -webkit-text-stroke: 1.4px ${theme.palette.lightYellow};
    `}
`;

export const Avatar = styled.img`
    border-radius: 208px;
    width: 254px;
    height: 350px;
    object-fit: cover;
    position: absolute;
    z-index: 2;
    align-self: center;

    ${({ theme }) => css`
        border: solid 3px ${theme.palette.black};
    `};
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 67px);
    margin-bottom: 67px;
    width: 100vw;

    background-color: transparent;

    border: solid red 3px;
`;
