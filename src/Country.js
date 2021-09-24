import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
export default function Country() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://restcountries.com/v3";
  let history = useHistory();
  useEffect(() => {
    getCountry();
  }, []);
  const getCountry = async () => {
    axios.get(`${baseUrl}/all`).then((res) => {
      setCountry(res.data);
     setLoading(false);
      // console.log(res.data);
    });
  };
  console.log(country);
  return (
    <><h1>Countries</h1>
      {loading ? (<div class="loader"></div>):
      (
        <div className="country-container">
          {country.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="card"
                  onClick={() => history.push(`/details/${item.name.common}`)}
                >
                  <img src={item.flags[1]} className="flages" />
                  <div className="card-text">
                    <p>
                      <span>Name: </span>
                      {item.name.common}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {item.capital}
                    </p>
                    <p>
                      <span>Region: </span>
                      {item.region}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      
      )}
    </>
  );
}
