import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useContext, useState} from "react";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

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
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export {App};