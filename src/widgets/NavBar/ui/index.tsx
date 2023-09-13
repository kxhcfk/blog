import styles from "./styles.module.scss";
import {HTMLAttributes} from "react";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {}

const NavBar = (props: NavBarProps) => {
    return (
        <div className={styles.root}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
};

export {NavBar};