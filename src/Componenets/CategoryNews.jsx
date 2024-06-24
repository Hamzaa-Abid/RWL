import React from "react";
import { FiCalendar } from "react-icons/fi";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import BreadcrumbNav from "./BreadcrumbNav";
import { getnewsbycategoryApi } from "../store/actions/campaign";
import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "../store/reducers/languageReducer";
import Skeleton from "react-loading-skeleton";
import {  translate } from "../utils";
import { locationData } from "../store/reducers/settingsReducer";

const CategoryNews = () => {
    const [Data, setData] = useState([]);
    const { slug, catid } = useParams();
    const catId = catid;
    const categoryName = slug;
    const [loading, setLoading] = useState(true);
    const currentLanguage = useSelector(selectCurrentLanguage);
    const location = useSelector(locationData)
    const storedLatitude = location && location.lat
    const storedLongitude = location && location.long
    useEffect(() => {
        getnewsbycategoryApi(
            catId,
            "",
            "0",
            "10",
            storedLatitude,
            storedLongitude,
            (response) => {
                setData(response.data);
                setLoading(false);
            },
            (error) => {
                if (error === "No Data Found") {
                    setData("");
                    setLoading(false);
                }
            }
        );
        // eslint-disable-next-line
    }, [catId, currentLanguage,location]);

    return (
        <section className="categoryview_Section">
            <BreadcrumbNav SecondElement={categoryName ? categoryName : ""} ThirdElement="0" />
            <div id="cv-main" className="bg-white py-5">
                <div id="cv-content" className="my-5 container">
                    {loading ? (
                        <div>
                            <Skeleton height={200} count={3} />
                        </div>
                    ) : (
                        <div className="row">
                            {Data.length > 0 ? (
                                Data.map((element) => (
                                    <div className="col-lg-3 col-md-4 col-12 " key={element.id}>

                                        <Link id="Link-all" to={`/news/${element.id}/${element.category_id}`}>
                                            <div id="cv-card" className="card">
                                                <img id="cv-card-image" src={element.image} className="card-img" alt="..." />
                                                <div id="cv-card-body" className="card-body">
                                                    <button id="cv-btnCatagory" className="btn btn-sm" type="button">
                                                        {element.category_name}
                                                    </button>
                                                    <p id="cv-card-title" className="card-title">
                                                        {element.title}
                                                    </p>
                                                    <p id="cv-card-date">
                                                        <FiCalendar size={18} id="cv-logoCalendar" />
                                                        {element.date}
                                                    </p>
                                                    {/* <Link id='btncvRead' className='btn overlay' type="button" to="/news-view" ><IoArrowForwardCircleSharp size={50}/></Link> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center my-5">{translate("nodatafound")}</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CategoryNews;
