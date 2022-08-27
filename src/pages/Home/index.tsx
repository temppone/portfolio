import { ArrowDown } from '@styled-icons/fa-solid';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/images/avatar.jpeg';
import presentationImage from '../../assets/images/presentationIllustartion.svg';
import Button from '../../components/Button';
import * as S from './styled';
import aboutIllustration from '../../assets/images/aboutIllustration.svg';

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
                <S.AboutMeIllustration
                    src={aboutIllustration}
                    alt={t('Home.AboutImage')}
                />

                <S.AboutContainer>
                    <S.Avatar src={avatar} />
                    <S.AboutTextContainer>
                        <S.AboutTitle>{t('Presentation.AboutMe')}</S.AboutTitle>
                        <S.AboutText>
                            Desenvolvedor TypeScript, buscando entender e
                            aprofundar cada vez mais na tecnologia. Além disso,
                            pesquisando novas formas de aperfeiçoar o
                            ecossistema React e fazer cada dia um código mais
                            limpo, bem feito e performático.
                        </S.AboutText>
                    </S.AboutTextContainer>
                </S.AboutContainer>
            </S.AboutSection>

            <S.ExperiencesSection>
                <S.ExperiencesTitle>{t('Home.Experiences')}</S.ExperiencesTitle>

                <S.ExperiencesTimeline>
                    <S.Timeline>
                        <S.ExperienceList>
                            <S.ExperienceBox>
                                <h4>Teste</h4>
                                <p>2014-2015</p>
                                <p>
                                    Ipsum incididunt nostrud excepteur irure ad
                                    ea ullamco quis duis.
                                </p>
                            </S.ExperienceBox>

                            <S.ExperienceBox>
                                <h4>Teste</h4>
                                <p>2014-2015</p>
                                <p>
                                    Ipsum incididunt nostrud excepteur irure ad
                                    ea ullamco quis duis.
                                </p>
                            </S.ExperienceBox>

                            <S.ExperienceBox>
                                <h4>Teste</h4>
                                <p>2014-2015</p>
                                <p>
                                    Ipsum incididunt nostrud excepteur irure ad
                                    ea ullamco quis duis.
                                </p>
                            </S.ExperienceBox>
                            <S.ExperienceBox>
                                <h4>Teste</h4>
                                <p>2014-2015</p>
                                <p>
                                    Ipsum incididunt nostrud excepteur irure ad
                                    ea ullamco quis duis.
                                </p>
                            </S.ExperienceBox>
                        </S.ExperienceList>
                    </S.Timeline>
                </S.ExperiencesTimeline>
            </S.ExperiencesSection>
        </S.Container>
    );
};

export default Home;
