import { HTMLAttributes, useCallback, useState } from 'react';

import { classNames } from '@/shared/lib';

import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
}

const Sidebar = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const handleToggleClick = useCallback(() => {
        setCollapsed((currentState) => !currentState);
    }, [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.root, collapsed && styles.collapsed)}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={handleToggleClick}
            >
                Toggle
            </Button>
            <div className={styles.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export { Sidebar };
