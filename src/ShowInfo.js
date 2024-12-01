import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

function ShowInfo({ info, isError, setCurrentCity }) {
    const [isCelsius, setIsCelsius] = useState(true);

    return (
        <div className="col-7">
            <div className="card p-2">
                <h1 className="text-capitalize">
                    {isError ? "Try another city" : info.cityText}
                </h1>
                <h6>Last update: {info.lastUpdate}</h6>
                {!isError && (
                    <div className="row">
                        <div className="col-8">
                            <h2>
                                {/* <img
                                className="icon"
                                src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`}
                                alt={info.description}
                            /> */}
                                <span className="icon">
                                    <WeatherIcon
                                        size={30}
                                        code={info.icon}
                                        color={"#142d4c"}
                                    />
                                </span>
                                <span>
                                    {isCelsius
                                        ? info.temperatureCelsius
                                        : info.temperatureFahrenheit}
                                </span>
                                <sup className="temperature">
                                    <a
                                        className={`temperature celsius ${
                                            isCelsius ? "active" : ""
                                        }`}
                                        href="/"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsCelsius(true);
                                        }}>
                                        °C
                                    </a>{" "}
                                    |
                                    <a
                                        className={`temperature fahrenheit ${
                                            !isCelsius ? "active" : ""
                                        }`}
                                        href="/"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsCelsius(false);
                                        }}>
                                        °F
                                    </a>
                                </sup>
                            </h2>
                            <span className="text-capitalize">
                                {info.description}
                            </span>
                        </div>
                        <div className="col-4 d-flex flex-column">
                            <span>Humidity: {info.humidity}%</span>
                            <span>Wind: {info.wind}km/h</span>
                        </div>
                    </div>
                )}
                <button
                    className="btn btn-sm"
                    type="button"
                    onClick={setCurrentCity}>
                    Current
                </button>
            </div>
        </div>
    );
}

export default ShowInfo;
