import { createCurrentDate } from "./createCurrentDate";

export function createCityObject(data) {
    return {
        currentTemp: Math.round(data.main.temp),
        cityText: data.name,
        description: data.weather[0].description,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        lastUpdate: createCurrentDate(
            data.dt * 1000 - data.timezone * 1000 * 2
        ),
        temperatureCelsius: Math.round(data.main.temp),
        temperatureFahrenheit: (Math.round(data.main.temp) * 9) / 5 + 32,
        icon: data.weather[0].icon,
    };
}
