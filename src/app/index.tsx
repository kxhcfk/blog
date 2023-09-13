import "./styles/index.scss";
import {classNames} from "@/shared/lib";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/Router";
import {NavBar} from "@/widgets/NavBar";
import {Sidebar} from "@/widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames("app", theme)}>
            <NavBar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export {App};