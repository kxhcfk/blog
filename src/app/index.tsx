import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import "./styles/index.scss";
import {classNames} from "@/shared/lib";
import {useTheme} from "@/app/providers/ThemeProvider";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', theme)}>
            <nav>
                <div>
                    <button onClick={toggleTheme}>TOGGLE THEME</button>
                </div>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </nav>
            <Suspense fallback={"Загрузка..."}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export {App};