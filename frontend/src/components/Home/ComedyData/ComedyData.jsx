import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComedyData } from "../../../Redux/AppReducer/action";
// import "../Trending.css";
const ComedyData = () => {
  const dispatch = useDispatch();
  const Comedy_data = useSelector((state) => state.AppReducer.Comedy);
  console.log(Comedy_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getComedyData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">ALL COMEDY SERIES</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Comedy_data.length > 0 &&
          Comedy_data.map((item) => {
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

export default ComedyData;
