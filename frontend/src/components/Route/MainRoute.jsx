import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Search from "../Search/Search";
import ComedySingle from "../SinglePage/ComedySingle";
import CurrentSingle from "../SinglePage/CurrentSingle";
import FutureSingle from "../SinglePage/FutureSingle";
import HistoricalSingle from "../SinglePage/HistoricalSingle";
import OriginSingle from "../SinglePage/OriginalSingle";
import PopularSinglePage from "../SinglePage/PopularSinglePage";
import SinglePage from "../SinglePage/TrendingSinglePage";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/Movies/:_id" element={<SinglePage />} />
      <Route path="/Popular/:_id" element={<PopularSinglePage />} />
      <Route path="/Comedy/:_id" element={<ComedySingle />} />
      <Route path="/Current/:_id" element={<CurrentSingle />} />
      <Route path="/Future/:_id" element={<FutureSingle />} />
      <Route path="/Historical/:_id" element={<HistoricalSingle />} />
      <Route path="/Original/:_id" element={<OriginSingle />} />

      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoute;
