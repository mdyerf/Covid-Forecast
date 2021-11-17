import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import Statistics from "./screens/Statistics";
import News from "./screens/News";

const App = () => (
  <BrowserRouter>
    <header>
      <Link to={routes.Statistics}>to statistics</Link>
      <Link to={routes.News}>to news</Link>
    </header>
    <Routes>
      <Route exact path={routes.Statistics} element={<Statistics />} />
      <Route path={routes.News} element={<News />} />
    </Routes>
  </BrowserRouter>
);

export default App;
