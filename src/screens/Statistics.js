import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiDeathSkull, GiHealthIncrease } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdCoronavirus } from "react-icons/md";
import { Link } from "react-router-dom";
import Select from "react-select";
import { getCountries, getStats } from "../api/stats";
import routes from "../constants/routes";

function Statistics(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [countryLabel, setCountryLabel] = useState({
    value: "IR",
    label: "Iran",
  });

  useEffect(() => {
    getCountries().then((res) => setCountries(res));
  }, []);

  useEffect(() => {
    getStats(countryLabel.value, "").then((res) => setCountry(res));
  }, [countryLabel]);

  return (
    <>
      <div className="page-title">Recent Covid-19 Statistics</div>
      <Link to={routes.News}>
        <div className="nav-link" style={{ right: "30px" }}>
          News about Covid-19
          <BsFillArrowRightCircleFill
            style={{ marginLeft: "10px" }}
            className="nav-link-arr"
          />
        </div>
      </Link>
      <Select
        className="select"
        value={countryLabel}
        onChange={(sel) => setCountryLabel(sel)}
        options={countries}
      />
      <div className="centeral">
        <img
          className="flag-img"
          src={`https://flagcdn.com/120x90/${countryLabel.value.toLowerCase()}.png`}
          alt={countryLabel.label}
        />
        <h2 className="name-text">{countryLabel.label}</h2>
        {country && (
          <div className="stats-table">
            <div>
              <div className="stats-row">
                <div className="icon-container">
                  <IoIosPeople className="icon people" />
                  <p>
                    <b>Population:</b> {country.population}
                  </p>
                </div>
                <div className="icon-container">
                  <MdCoronavirus className="icon virus" />
                  <p>
                    <b>Cases Per Million people: </b>
                    {
                      country.latest_data.calculated
                        .cases_per_million_population
                    }
                  </p>
                </div>
                <div className="icon-container">
                  <p>
                    <GiDeathSkull className="icon death" />
                    <b>Death Rate: </b>
                    {country.latest_data.calculated.death_rate}
                  </p>
                </div>
              </div>
              <div className="stats-row">
                <div className="icon-container">
                  <GiHealthIncrease className="icon health" />
                  <p>
                    <b>Recovery Rate: </b>
                    {country.latest_data.calculated.recovery_rate}
                  </p>
                </div>
                <div className="icon-container">
                  <MdCoronavirus className="icon virus" />
                  <p>
                    <b>Confirmed:</b> {country.latest_data.confirmed}
                  </p>
                </div>
                <div className="icon-container">
                  <GiHealthIncrease className="icon health" />
                  <p>
                    <b>Recovered:</b> {country.latest_data.recovered}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="stats-row">
                <div className="icon-container">
                  <GiDeathSkull className="icon death" />
                  <p>
                    <b>Deaths:</b> {country.latest_data.deaths}
                  </p>
                </div>
                <div className="icon-container">
                  <MdCoronavirus className="icon virus" />
                  <p>
                    <b>Criticals:</b> {country.latest_data.critical}
                  </p>
                </div>
              </div>
              <div className="stats-row">
                <div className="icon-container">
                  <GiDeathSkull className="icon death" />
                  <p>
                    <b>Today Deaths:</b> {country.today.deaths}
                  </p>
                </div>
                <div className="icon-container">
                  <MdCoronavirus className="icon virus" />
                  <p>
                    <b>Today Cases:</b> {country.today.confirmed}
                  </p>
                </div>
                <div className="icon-container"></div>
                <div className="icon-container"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Statistics;
