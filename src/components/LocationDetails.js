import React from "react";

const LocationDetails = (props) => {
    const {city,country} = props;
    return <h1>{`${city},${country}`}</h1>
}

export default LocationDetails
