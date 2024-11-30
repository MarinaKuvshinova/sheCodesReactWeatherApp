import { useState } from "react";
import Search from "./Search";
import ShowInfo from "./ShowInfo";
import axios from "axios";

function Weather() {
    const [info, setInfo] = useState(null);

    function getInfo(city) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

        axios
            .get(url)
            .then((res) => {
                const data = JSON.parse(JSON.stringify(res.data));
                setInfo(data);
            })
            .catch((error) => error && setInfo(null));
    }

    return (
        <div>
            <h1>Weather</h1>
            <Search getInfo={getInfo} />
            {info && <ShowInfo info={info} />}
            <p>
                <a href="https://github.com/MarinaKuvshinova/sheCodesReactWeatherApp">
                    Open-source
                </a>{" "}
                code by Maryna Kuvshynova
            </p>
        </div>
    );
}

export default Weather;
