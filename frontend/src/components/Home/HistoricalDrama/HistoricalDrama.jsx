import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoricalData } from "../../../Redux/AppReducer/action";
// import "../Trending.css";
const Historical = () => {
  const dispatch = useDispatch();
  const Historical_data = useSelector((state) => state.AppReducer.Historical);
  console.log(Historical_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getHistoricalData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">HISTORICAL RELEASE</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Historical_data.length > 0 &&
          Historical_data.map((item) => {
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

export default Historical;
