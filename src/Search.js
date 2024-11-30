import React, { useState } from "react";

function Search({ getInfo }) {
    function handleSubmit(e) {
        e.preventDefault();
        const currentValue = e.target.elements.city.value;
        getInfo(currentValue);
        e.target.elements.city.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="city" type="search" placeholder="Enter a city ..." />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;
