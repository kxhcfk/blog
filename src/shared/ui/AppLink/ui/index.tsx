import {classNames} from "@/shared/lib";

import {Link, LinkProps} from "react-router-dom";

import styles from './styles.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}

const AppLink = (props: AppLinkProps) => {
    const {className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    
    return (
        <Link className={classNames(styles.root, styles[theme], className)} {...otherProps}>
            {children}
        </Link>
    );
};

export {AppLink};