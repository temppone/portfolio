import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useOnClickOutside from '../../hooks/useClickOutside';
import LocaleButton from '../LocaleButton';
import * as S from './styled';

type Items = {
    label: string;
    path: string;
};

type Header = {
    items: Items[];
};

const Header = ({ items }: Header) => {
    const { t } = useTranslation();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const reference = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = () => {
        setMenuIsOpen(false);
    };

    useOnClickOutside(reference, handleClickOutside);

    return (
        <S.HeaderContainer isActive={menuIsOpen}>
            <S.Header ref={reference}>
                <S.Title onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {menuIsOpen ? t('Menu.Close') : t('Menu.Header')}
                </S.Title>

                <S.Menu isOpen={menuIsOpen}>
                    <S.MenuItems>
                        {items.map(({ label, path }) => (
                            <S.Item key={path}>{label}</S.Item>
                        ))}
                    </S.MenuItems>
                    <S.Item>
                        <LocaleButton />
                    </S.Item>
                </S.Menu>
            </S.Header>
        </S.HeaderContainer>
    );
};

export default Header;
