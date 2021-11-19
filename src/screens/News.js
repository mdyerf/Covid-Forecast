import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getNews } from "../api/news";
import sortByOptions from "../constants/sort";
import Select from "react-select";
import dateOptions from "../constants/dateOptions";

function News(props) {
  const [news, setNews] = useState([]);
  const [sortBy, setSortBy] = useState(0);
  const [from, setFrom] = useState(dateOptions[1]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getNews(sortByOptions[sortBy], from.value, page).then((res) =>
      setNews(res)
    );
  }, [sortBy, from, page]);

  return (
    <>
      <div className="page-title">News about Covid-19</div>
      <Link to={routes.Statistics}>
        <div className="nav-link" style={{ left: "30px" }}>
          <BsFillArrowLeftCircleFill
            style={{ marginRight: "10px" }}
            className="nav-link-arr"
          />
          Recent Statistics
        </div>
      </Link>
      <div
        onClick={() => setSortBy((sortBy + 1) % sortByOptions.length)}
        className="nav-link"
        style={{ right: "30px" }}
      >
        Sort By {sortByOptions[sortBy]}
      </div>
      <Select
        className="select"
        value={from}
        onChange={(sel) => setFrom(sel)}
        options={dateOptions}
      />
      <div className="news-container">
        {news &&
          news.length > 0 &&
          news.map((n, index) => (
            <a key={index} href={n.url}>
              <div className="news-card">
                <div className="news-image-container">
                  <img width="100%" src={n.urlToImage} alt={n.title} />
                  <p className="author">By: {n.author ?? "unkown"}</p>
                  <p className="author">
                    {n.publishedAt.substring(0, 10).replaceAll("-", "/")}
                  </p>
                </div>
                <div className="news-text">
                  <div className="news-title">{n.title}</div>
                  <div className="news-subtitle">{n.content}</div>
                </div>
              </div>
            </a>
          ))}
        {(!news || news.length === 0) && (
          <div className="page-title">No more news are found!!</div>
        )}
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "70px",
        }}
      >
        {page > 1 && (
          <div
            className="nav-link"
            onClick={() => setPage(page - 1)}
            style={{ position: "relative" }}
          >
            <BsFillArrowLeftCircleFill
              style={{ marginRight: "10px" }}
              className="nav-link-arr"
            />
            Periviuos Page
          </div>
        )}
        {news && news.length > 0 && (
          <div
            className="nav-link"
            onClick={() => setPage(page + 1)}
            style={{ position: "relative" }}
          >
            Next Page
            <BsFillArrowRightCircleFill
              style={{ marginLeft: "10px" }}
              className="nav-link-arr"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default News;
