import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      <h1 className="Watchfree">Historical Release Movies</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Historical_data.length > 0 &&
          Historical_data.map((item) => {
            return (
              <Link to={`Historical/${item._id}`}>
                <img src={item.Poster} alt={item.Title} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Historical;
