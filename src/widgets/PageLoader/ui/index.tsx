import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';
import { Loader } from '@/shared/ui/Loader/ui';
import { classNames } from '@/shared/lib';

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {}

const PageLoader = (props: PageLoaderProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={classNames(styles.root, className)} {...otherProps}>
            <Loader className={styles.loader} />
        </div>
    );
};

export { PageLoader, PageLoaderProps };
