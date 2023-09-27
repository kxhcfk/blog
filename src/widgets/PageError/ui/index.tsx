import { HTMLAttributes } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';

import styles from './styles.module.scss';

interface PageErrorProps extends HTMLAttributes<HTMLDivElement> {
}

const PageError = (props: PageErrorProps) => {
    const { className, ...otherProps } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(styles.root, className)} {...otherProps}>
            <h1 className={styles.title}>{t('Произошла ошибка')}</h1>
        </div>
    );
};

export { PageError, PageErrorProps };
