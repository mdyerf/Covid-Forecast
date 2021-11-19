import React, { useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getStats } from "../api/stats";
import routes from "../constants/routes";

function Statistics(props) {

  useEffect(() => {
    getStats("", "").then((res) => console.log(res));
  });
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
    </>
  );
}

export default Statistics;
