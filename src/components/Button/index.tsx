import { HTMLAttributes, ReactElement } from 'react';
import * as S from './styled';

interface Button extends HTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: ReactElement;
}

const Button = ({ label, icon, ...props }: Button) => {
    return (
        <S.Container {...props}>
            {!!label && <span>{label}</span>}
            {!!icon && <span>{icon}</span>}
        </S.Container>
    );
};

export default Button;
