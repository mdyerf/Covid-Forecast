import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

function Statistics(props) {
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
      <div>Here is Statistics</div>
    </>
  );
}

export default Statistics;
