import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Search from "../Search/Search";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default MainRoute;
