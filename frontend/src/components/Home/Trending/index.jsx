import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingData } from "../../../Redux/AppReducer/action";
import "./Trending.css";
const Trending = () => {
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Trending);
  console.log(Trending_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getTrendingData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Watch Premium for Free</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Trending_data.length > 0 &&
          Trending_data.map((item) => {
            return (
              <div>
                <img src={item.Poster} alt={item.Title} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Trending;
