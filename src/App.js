import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import Statistics from "./screens/Statistics";
import News from "./screens/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={routes.Statistics} element={<Statistics />} />
        <Route path={routes.News} element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
