import { render, screen } from '@testing-library/react';
import App from '../../components/App.js';
import forecast from '../../data/forecast.json';


describe("App",()=>{
    it("renders correctly",()=>{
        const{asFragment}=render(
            <App />)
        expect(asFragment()).toMatchSnapshot();

    })
})

