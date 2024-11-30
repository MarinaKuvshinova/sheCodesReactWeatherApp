import React from "react";

function ShowInfo({ info }) {
    return (
        <ul>
            <li>Temperature: {Math.round(info.main.temp)}°C</li>
            <li>Description: {info.weather[0].description}</li>
            <li>Humidity: {info.main.humidity}%</li>
            <li>Wind: {Math.round(info.wind.speed)}km/h</li>
            <li>
                <img
                    src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
                    alt={info.weather[0].description}
                />
            </li>
        </ul>
    );
}

export default ShowInfo;
