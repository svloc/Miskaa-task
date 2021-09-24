import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
export default function countryDetails() {
  const [country, setCountry] = useState([]);
  const [lang, setLang] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://restcountries.com/v3";
  console.log(name);
  useEffect(() => {
    getCountry();
  }, []);
  const getCountry = async () => {
    axios.get(`${baseUrl}/name/${name}`).then((res) => {
      setCountry(res.data);
      setLang(Object.values(res.data[0].languages));
      setLoading(false);
    });
  };

  return (
    <><Link to="/"><button>Back to Countries</button></Link>
     {loading ? (<div class="loader"></div>):
      <div className="row">
        {country.map((item, index) => {
          return (
            <>
              <div className="flag-img">
                <img src={item.flags[1]} width="100%" />
              </div>

              <div className="card-body">
                <p>
                  <span>Name: </span>
                  {item.name.common}
                </p>
                <p>
                  <span>Official Name:</span>
                  {item.name.official}
                </p>
                <p>
                  <span>Capital: </span>
                  {item.capital}
                </p>
                <p>
                  <span>Region: </span>
                  {item.region}
                </p>
                <p>
                  <span>SubRegion: </span>
                  {item.subregion}
                </p>
                <p>
                  <span>Border: </span>
                  {item.borders ? item.borders.toString():<sub>No Border</sub>}
                </p>
                <p>
                  <span> Language : </span>
                  {lang.toString()}
                </p>
              </div>
            </>
          );
        })}
      </div>
}
    </>
  );
}
