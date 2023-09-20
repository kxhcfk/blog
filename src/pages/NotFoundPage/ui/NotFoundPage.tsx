import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';

import styles from './styles.module.scss';

interface NotFoundPageProps extends HTMLAttributes<HTMLDivElement> {}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className, ...otherProps } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(styles.root, className)} {...otherProps}>
            {t('Страница не найдена')}
        </div>
    );
};

export { NotFoundPage, NotFoundPageProps };
