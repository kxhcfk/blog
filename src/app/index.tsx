import "./styles/index.scss";
import {classNames} from "@/shared/lib";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/Router";
import {NavBar} from "@/widgets/NavBar";

const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames("app", theme)}>
            <nav>
                <NavBar/>
            </nav>
            <AppRouter/>
        </div>
    );
};

export {App};