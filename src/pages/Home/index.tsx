import { useTranslation } from 'react-i18next';
import * as S from './styled';
import presentationImage from '../../assets/images/presentationIllustartion.svg';
import Button from '../../components/Button';
import { ArrowDown } from '@styled-icons/fa-solid';
import avatar from '../../assets/images/avatar.jpeg';
import Marquee from 'react-fast-marquee';
import { useRef } from 'react';

const Home = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLHeadingElement>(null);

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
                        <Button
                            onClick={() => ref.current?.scrollIntoView(false)}
                            icon={<ArrowDown size="50" />}
                        />
                    </S.ButtonContainer>
                </S.PresentationContainer>

                <S.DiagonalStrip>
                    <Marquee gradient={false}>
                        front-end front-end front-end
                    </Marquee>
                </S.DiagonalStrip>
            </S.Section>

            <S.AboutSection ref={ref}>
                <S.Avatar src={avatar} />
            </S.AboutSection>
        </S.Container>
    );
};

export default Home;
