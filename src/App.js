import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./style.css";
import Country from "./Country";
import CountryDetails from "./CountryDetails";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" children={<Country />} />
          <Route path="/details/:name" children={<CountryDetails />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
