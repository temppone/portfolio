import { useTranslation } from 'react-i18next';
import * as S from './styled';

const Header = () => {
    const { t } = useTranslation();

    return (
        <S.Header>
            <S.Title>{t('Menu.Header')}</S.Title>
        </S.Header>
    );
};

export default Header;
