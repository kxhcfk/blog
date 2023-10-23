import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/Router';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export { App };
