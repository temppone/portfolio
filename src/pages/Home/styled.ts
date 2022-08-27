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

    &:hover {
        ${({ theme }) => css`
            text-shadow: 2px 2px ${theme.palette.darkBlue};
        `}
    }
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
    z-index: 2;
    align-self: center;
    margin-top: 5px;

    ${({ theme }) => css`
        border: solid 3px ${theme.palette.black};
    `};
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const AboutSection = styled.section`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: calc(100vh - 67px);
    width: 100vw;
    background-color: transparent;
`;

export const AboutTitle = styled.h3`
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 400;
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 12px;
`;

export const AboutText = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Ubuntu';
`;

export const AboutMeIllustration = styled.img`
    height: 322px;
    margin-right: -20px;
    align-self: flex-end;
`;

export const ExperiencesSection = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 67px);
    width: 100vw;
    background-color: ${({ theme }) => theme.palette.lightPink};
`;

export const ExperiencesTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
    width: 100vw;
    height: 87px;
    text-transform: uppercase;

    ${({ theme }) => css`
        border: solid 5px ${theme.palette.black};
        background-color: ${theme.palette.red};
    `}
`;

export const ExperiencesTimeline = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ExperienceBox = styled.li`
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 12px;
    box-shadow: 5px 5px;
    margin-bottom: 16px;
`;

export const Timeline = styled.div`
    height: 80%;
    width: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: ${({ theme }) => theme.palette.black};
    }
`;

export const ExperienceList = styled.ul``;
