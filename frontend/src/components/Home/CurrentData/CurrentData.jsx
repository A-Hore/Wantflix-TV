import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentData } from "../../../Redux/AppReducer/action";
// import "../Trending.css";
const CurrentData = () => {
  const dispatch = useDispatch();
  const Current_data = useSelector((state) => state.AppReducer.Current);
  console.log(Current_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getCurrentData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Currents Hits and Future release</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Current_data.length > 0 &&
          Current_data.map((item) => {
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

export default CurrentData;
