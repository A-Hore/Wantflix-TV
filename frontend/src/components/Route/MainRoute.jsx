import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Search from "../Search/Search";
import PopularSinglePage from "../SinglePage/PopularSinglePage";
import SinglePage from "../SinglePage/TrendingSinglePage";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/Movies/:_id" element={<SinglePage />} />
      <Route path="/Popular/:_id" element={<PopularSinglePage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoute;
