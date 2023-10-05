import React from "react";
import {render} from  "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("tests forecast details",()=>{

    const Validprops3={
        temperature:{
            max:22,
            min:13
        },
        wind:{
            speed:7,
            direction:"north"
        },
        date:111111,
        direction:"north",
        humidity:70
    }

    it("renders the details component correctly",()=>{
        const {asFragment} = render(
            <ForecastDetails forecast={Validprops3}
            />
        )

    expect(asFragment()).toMatchSnapshot();
    })

    
    it("renders correct values for props",()=>{
        const {getByText} = render(
            <ForecastDetails forecast={Validprops3}
            
            />
        );
    //console.log(Validprops3.temperature, "HELLOOOO")
    expect(getByText("22°C")).toHaveAttribute("class","forecast-details_temperature_max")
    expect(getByText("7")).toHaveAttribute("class","forecast-details_windspeed")
    expect(getByText("Thu Jan 01 1970")).toHaveAttribute("class","forecast-details_date")
    expect(getByText("north")).toHaveAttribute("class","forecast-details_direction")
    expect(getByText("70")).toHaveAttribute("class","forecast-details_humidity")
        })

})