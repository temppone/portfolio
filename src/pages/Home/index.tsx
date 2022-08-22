import { useTranslation } from 'react-i18next';
import * as S from './styled';
import presentationImage from '../../assets/images/presentationIllustartion.svg';
import Button from '../../components/Button';
import { ArrowDown } from '@styled-icons/fa-solid';

const Home = () => {
    const { t } = useTranslation();

    return (
        <S.Container>
            <S.Section>
                <S.PresentationContainer>
                    <img src={presentationImage} alt={t('Home.Image')} />

                    <S.PresentationText>
                        <div>{t('Presentation.Hello')}</div>

                        <S.PresentationName>Tempone</S.PresentationName>
                    </S.PresentationText>

                    <S.ButtonContainer>
                        <Button icon={<ArrowDown size="50" />} />
                    </S.ButtonContainer>
                </S.PresentationContainer>

                <S.DiagonalStrip>front-end front-end front-end</S.DiagonalStrip>
            </S.Section>

            <S.Section>teste</S.Section>
        </S.Container>
    );
};

export default Home;
