import axios from "axios";
import { createCityObject } from "./helpers/createCityObject";

function Search({ setInfo, setIsError }) {
    function handleSubmit(e) {
        e.preventDefault();
        const city = e.target.elements.city.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

        axios
            .get(url)
            .then((res) => {
                setInfo(createCityObject(res.data));
            })
            .catch((error) => {
                if (error) {
                    setIsError(true);
                }
            });
        e.target.elements.city.value = "";
    }

    return (
        <div className="col-12">
            <form onSubmit={handleSubmit} action="#" className="search-form">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search City"
                        aria-label="search city"
                        aria-describedby="button-search"
                        name="city"
                    />
                    <button
                        className="btn btn-outline-secondary btn-lg"
                        type="submit"
                        id="button-search">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;
