import { ButtonHTMLAttributes, useCallback } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

import styles from './styles.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className, onClick, ...otherProps } = props;

    const { theme, toggleTheme } = useTheme();

    const handleClick = useCallback((e) => {
        toggleTheme();
        onClick?.(e);
    }, [theme]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.root, className)}
            onClick={handleClick}
            {...otherProps}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export { ThemeSwitcher };
