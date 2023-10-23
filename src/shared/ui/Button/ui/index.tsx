import { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib';

import styles from './styles.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
}

const Button = (props: ButtonProps) => {
    const {
        className, theme, children, ...otherProps
    } = props;

    return (
        <button className={classNames(styles.root, styles[theme], className)} {...otherProps}>
            {children}
        </button>
    );
};

export { Button };
