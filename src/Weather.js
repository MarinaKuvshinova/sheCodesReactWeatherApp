import { useEffect, useState } from "react";
import Search from "./Search";
import ShowInfo from "./ShowInfo";
import axios from "axios";
import { createCityObject } from "./helpers/createCityObject";

const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";

function Weather() {
    const [info, setInfo] = useState(null);
    const [isError, setIsError] = useState(false);

    const setCurrentCity = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const pathApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            axios
                .get(pathApi)
                .then((res) => {
                    setIsError(false);
                    setInfo(createCityObject(res.data));
                })
                .catch((error) => {
                    error && setIsError(true);
                });
        });
    };

    useEffect(() => {
        setCurrentCity();
    }, []);

    return (
        <div className="row">
            <Search setInfo={setInfo} setIsError={setIsError} />
            {(info || isError) && (
                <ShowInfo
                    info={info}
                    isError={isError}
                    setCurrentCity={setCurrentCity}
                />
            )}
            <div className="col-12">
                <p>
                    <a href="https://github.com/MarinaKuvshinova/sheCodesReactWeatherApp">
                        Open-source code
                    </a>{" "}
                    by Maryna Kuvshynova
                </p>
            </div>
        </div>
    );
}

export default Weather;
