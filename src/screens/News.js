import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function News(props) {
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
      <div className="news-container">
        <Link to={routes.NewsDetail} params={{ id: 1 }}>
          <div className="news-card">
            <div className="news-image-container">
              <img width="100%" src="doodle-bg.jpg" alt="news" />
            </div>
            <div className="news-text">
              <div className="news-title">
                This is a long title about this news!
              </div>
              <div className="news-subtitle">
                And this is subtitle which is actualy very long that may not fit
                in the card
              </div>
            </div>
          </div>
        </Link>
        <Link to={routes.NewsDetail} params={{ id: 1 }}>
          <div className="news-card">
            <div className="news-image-container">
              <img width="100%" src="doodle-bg.jpg" alt="news" />
            </div>
            <div className="news-text">
              <div className="news-title">
                This is a long title about this news!
              </div>
              <div className="news-subtitle">
                And this is subtitle which is actualy very long that may not fit
                in the card
              </div>
            </div>
          </div>
        </Link>
        <Link to={routes.NewsDetail} params={{ id: 1 }}>
          <div className="news-card">
            <div className="news-image-container">
              <img width="100%" src="doodle-bg.jpg" alt="news" />
            </div>
            <div className="news-text">
              <div className="news-title">
                This is a long title about this news!
              </div>
              <div className="news-subtitle">
                And this is subtitle which is actualy very long that may not fit
                in the card
              </div>
            </div>
          </div>
        </Link>
        <Link to={routes.NewsDetail} params={{ id: 1 }}>
          <div className="news-card">
            <div className="news-image-container">
              <img width="100%" src="doodle-bg.jpg" alt="news" />
            </div>
            <div className="news-text">
              <div className="news-title">
                This is a long title about this news!
              </div>
              <div className="news-subtitle">
                And this is subtitle which is actualy very long that may not fit
                in the card
              </div>
            </div>
          </div>
        </Link>
        <Link to={routes.NewsDetail} params={{ id: 1 }}>
          <div className="news-card">
            <div className="news-image-container">
              <img width="100%" src="doodle-bg.jpg" alt="news" />
            </div>
            <div className="news-text">
              <div className="news-title">
                This is a long title about this news!
              </div>
              <div className="news-subtitle">
                And this is subtitle which is actualy very long that may not fit
                in the card
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default News;
