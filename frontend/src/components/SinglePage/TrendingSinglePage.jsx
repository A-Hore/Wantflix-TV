import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrendingData } from "../.././Redux/AppReducer/action";

const SinglePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Trending);
  console.log("Trend", Trending_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Trending_data.length === 0) {
      dispatch(getTrendingData());
    }
  }, [Trending_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Trending_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Trending_data]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentTrending?.Title}</h2>
      <div>
        <img src={`${currentTrending.Poster}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentTrending?.Year}</div>
      </div>
    </div>
  );
};

export default SinglePage;
