import { useSelector } from "react-redux";
import { selectCurrentLanguageLabels } from "./store/reducers/languageReducer";
import { loadToken, tokenApi, tokenData } from "./store/reducers/tokenReducer";
import { Suspense, useEffect } from "react";
import Footer from "./Componenets/Footer";
import CatNav from "./Componenets/CatNav";
import Newsbar from "./Componenets/Newsbar";
import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import WeatherCard from "./Componenets/WeatherCard";
import { laodwebsettingsApi } from "./store/reducers/websettingsReducer";
import { laodSettingsApi, settingsData } from "./store/reducers/settingsReducer";
import SearchPopup from "./Componenets/SearchPopup";
import "./CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-quill/dist/quill.snow.css';

const App = () => {

    const settings = useSelector(settingsData);

    // Set loader color theme
    function changeLoaderColor() {
        document.documentElement.style.setProperty('--loader-color', process.env.REACT_APP_COLOR);
    }

    // secondary color
    const secondaryColor = () => {
        document.documentElement.style.setProperty('--secondary-color', process.env.REACT_APP_SECONDARY_COLOR);
    }

    useEffect(() => {
        changeLoaderColor();
        secondaryColor();
    }, []);


    useEffect(() => {
        // token fetch
        tokenApi(
            (response) => {
                let token = response.data;
                loadToken(token);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    useSelector(selectCurrentLanguageLabels);

    const hasToken = useSelector(tokenData);

    // web settings load
    useEffect(() => {
        if (hasToken) {
            laodSettingsApi(() => { }, (error) => { console.log(error) });
            // language laod
            laodwebsettingsApi(
                (response) => {
                    document.documentElement.style.setProperty('--primary-color', response && response.data.web_color_code);
                    // Handle response data
                },
                (error) => {
                    // Handle error
                }
            );
        }
    }, [hasToken]);

    return (
        <>
            <ToastContainer theme="colored" />
            {hasToken && settings ? (
                <>
                    <SearchPopup />
                    <WeatherCard />
                    <Newsbar />
                    <CatNav />
                    <Suspense fallback={<div className="loader-container"><span className="loader"></span></div>}>
                        <Router />
                    </Suspense>
                    <Footer />
                </>
            ) : (
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            )}
        </>
    );
}

export default App;
