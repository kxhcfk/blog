import React, { ButtonHTMLAttributes } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from '@/shared/ui/Button';

interface LangSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, onClick, ...otherProps } = props;

    const { t, i18n } = useTranslation();

    const handleLangToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        onClick?.(e);
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={handleLangToggle}
            className={className}
            {...otherProps}
        >
            {t('Язык')}
        </Button>
    );
};

export { LangSwitcher };
