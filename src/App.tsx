import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from 'react';
import {UseTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={`/`}>Главная</Link>
            <Link to={`/about`}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={`/about`} element={<AboutPageAsync/>}/>
                    <Route path={`/`} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
