import React from "react";
import ForecastSummary from "../../components/ForecastSummary";
import {getByTestId, render} from "@testing-library/react"

describe('ForecastSummary',() => {
    const validProps = {
      
        date:111111,
        description:'Stub description',
        icon:'StubIcon',
        temperature: {
            min: 12,
            max: 22,
        },
    };

    it("renders correctly",() => {
        const {asFragment} = render(
            <ForecastSummary
                date={validProps.date}
                description={validProps.description}
                icon={validProps.icon}
                temperature={validProps.temperature}
            />
        );
    expect(asFragment()).toMatchSnapshot();
})

    it("renders correct values for props",()=>{
        const {getByText,getByTestId} = render(
            <ForecastSummary
                date={validProps.date}
                description={validProps.description}
                icon={validProps.icon}
                temperature={validProps.temperature}
                
            />
        );
    expect(getByText("Thu Jan 01 1970")).toHaveAttribute("class", "forecast-summary_date");
    expect(getByText("Stub description")).toHaveAttribute("class","forecast-summary_description");
    expect(getByTestId("forecast-icon")).toHaveAttribute("class","forecast-summary_icon");
    expect(getByText("22°C")).toHaveAttribute("class","forecast-summary_temperature")

    })

   
});