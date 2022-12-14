import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingData } from "../../../Redux/AppReducer/action";

const Trending = () => {
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Trending);
  console.log(Trending_data);

  useEffect(() => {
    dispatch(getTrendingData);
  }, [dispatch]);
  return (
    <div>
      <h1>Trending Data</h1>
    </div>
  );
};

export default Trending;
