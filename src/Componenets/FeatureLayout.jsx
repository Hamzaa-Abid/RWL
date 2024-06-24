import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "../store/reducers/languageReducer";
import { getfeaturesectionApi } from "../store/actions/campaign";
import StyleOne from "./StyleOne";
import StyleTwo from "./StyleTwo";
import StyleThree from "./StyleThree";
import StyleFour from "./StyleFour";
import StyleFive from "./StyleFive";
import { translate } from "../utils";
import Skeleton from "react-loading-skeleton";
import StyleSix from "./StyleSix";
import { locationData } from "../store/reducers/settingsReducer";

const FeatureLayout = () => {
    // state
    const [Data, setData] = useState([]);

    // loader state
    const [isLoading, setIsLoading] = useState(true);

    // current language
    const currentLanguage = useSelector(selectCurrentLanguage);
    // console.log("offset data", offsetdata)
    const location = useSelector(locationData)
    const storedLatitude = location && location.lat
    const storedLongitude = location && location.long

    // breaking news api call
    useEffect(() => {
        getfeaturesectionApi(
            "", 
            "",
            storedLatitude,
            storedLongitude,
            (response) => {
                const responseData = response.data;
                setData(responseData)
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(false);
                if (error === "No Data Found") {
                    setData("");
                }
            }
        );
        // eslint-disable-next-line
    }, [currentLanguage,location]);
   

    const SelectType = () => {
        return Data && Data.map((item) => {
            if (item.news_type === "news") {
                if (item.style_web === "style_1") {
                    return <StyleOne isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_2") {
                    return <StyleTwo isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_3") {
                    return <StyleThree isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_4") {
                    return <StyleFour isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_5") {
                    return <StyleFive isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_6") {
                    return <StyleSix isLoading={isLoading} Data={item} setIsLoading={setIsLoading} />;
                }
            } else if (item.news_type === "breaking_news") {
                if (item.style_web === "style_1") {
                    return <StyleOne isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_2") {
                    return <StyleTwo isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_3") {
                    return <StyleThree isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_4") {
                    return <StyleFour isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_5") {
                    return <StyleFive isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_6") {
                    return <StyleSix isLoading={isLoading} Data={item} setIsLoading={setIsLoading} />;
                }
            } else if (item.news_type === "videos") {
                if (item.style_web === "style_1") {
                    return <StyleOne isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_2") {
                    return <StyleTwo isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_3") {
                    return <StyleThree isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_4") {
                    return <StyleFour isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_5") {
                    return <StyleFive isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_6") {
                    return <StyleSix isLoading={isLoading} Data={item} setIsLoading={setIsLoading} />;
                }
            } else if (item.news_type === "user_choice") {
                if (item.style_web === "style_1") {
                    return <StyleOne isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_2") {
                    return <StyleTwo isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_3") {
                    return <StyleThree isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_4") {
                    return <StyleFour isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_5") {
                    return <StyleFive isLoading={isLoading} Data={item} />;
                } else if (item.style_web === "style_6") {
                    return <StyleSix isLoading={isLoading} Data={item} setIsLoading={setIsLoading} />;
                }

            }
            return null;
        })


    };

    const selectedComponent = SelectType();

    return (
        <>
            {isLoading ? (
                <div className="col-12 loading_data">
                    <Skeleton height={20} count={22} />
                </div>
            ) : selectedComponent.length > 0 ? (
                selectedComponent
            ) : (
                <p className="no_data_available">{translate("noNews")}</p>
            )}
        </>
    );
};

export default FeatureLayout;
