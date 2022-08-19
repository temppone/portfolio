import i18next from 'i18next';
import * as S from './styled';

const LocaleButton = () => {
    return (
        <>
            <S.Language
                isActive={i18next.language === 'pt-BR'}
                onClick={() => i18next.changeLanguage('pt-BR')}
            >
                PT
            </S.Language>
            /
            <S.Language
                isActive={i18next.language === 'en-US'}
                onClick={() => i18next.changeLanguage('en-US')}
            >
                EN
            </S.Language>
        </>
    );
};

export default LocaleButton;
