import React from  'react'
import {render, getByTestId} from "@testing-library/react"
import ForecastSummaries from '../../components/ForecastSummaries'

describe("Forecast summaries",()=>{
    const validProps2=[
        {
            temperature : {
                min: 22,
                max:35,
            },
            icon :'StubIcon',
            description :'StubDescription' ,
            date :111111
        },
        {
            temperature : {
                min: 12,
                max:30,
            },
            icon :'StubIcon2',
            description :'StubDescription2' ,
            date :222222
        },
    
    ];
   

it("renders the summary components correctly",()=>{
    const{asFragment} = render(
        <ForecastSummaries forecasts={validProps2} />)         
expect(asFragment()).toMatchSnapshot();
});

it("renders forecast summary the correct number of times",()=>{
    const {getAllByTestId}=render(
        <ForecastSummaries forecasts={validProps2} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2)

    })

})