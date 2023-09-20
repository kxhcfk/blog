import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';
import { classNames } from '@/shared/lib';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

const Loader = (props: LoaderProps) => {
    const { className, ...otherProps } = props;

    return (
        <div className={classNames(styles.root, className)} {...otherProps} />
    );
};

export { Loader, LoaderProps };
