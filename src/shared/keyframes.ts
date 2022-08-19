import { keyframes } from 'styled-components';

export const slideDown = keyframes`
    from {
        opacity: 1;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;
