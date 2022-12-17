import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Search from "../Search/Search";
import ComedySingle from "../SinglePage/ComedySingle";
import CurrentSingle from "../SinglePage/CurrentSingle";
import FutureSingle from "../SinglePage/FutureSingle";
import HistoricalSingle from "../SinglePage/HistoricalSingle";
import OriginSingle from "../SinglePage/OriginalSingle";
import PopularSinglePage from "../SinglePage/PopularSinglePage";
import SinglePage from "../SinglePage/TrendingSinglePage";
import ClutterSingle from "../SinglePage/ClitterSingle";
import DramaSingle from "../SinglePage/DramaSingle";
import KidsSingle from "../SinglePage/KidsSingle";
import MusicSingle from "../SinglePage/MusicSingle";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/Movies/:_id" element={<SinglePage />} />
      <Route path="/Popular/:_id" element={<PopularSinglePage />} />
      <Route path="/Comedy/:_id" element={<ComedySingle />} />
      <Route path="/Current/:_id" element={<CurrentSingle />} />
      <Route path="/Future/:_id" element={<FutureSingle />} />
      <Route path="/Historical/:_id" element={<HistoricalSingle />} />
      <Route path="/Original/:_id" element={<OriginSingle />} />
      <Route path="/Clitter/:_id" element={<ClutterSingle />} />
      <Route path="/Drama/:_id" element={<DramaSingle />} />
      <Route path="/Kids/:_id" element={<KidsSingle />} />
      <Route path="/Music/:_id" element={<MusicSingle />} />

      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoute;
