import styles from "./styles.module.scss";
import {HTMLAttributes} from "react";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {}

const NavBar = (props: NavBarProps) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
};

export {NavBar};