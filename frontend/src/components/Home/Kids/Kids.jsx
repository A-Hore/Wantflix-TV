import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKidsData } from "../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import "../Trending/Trending.css";
const Kids = () => {
  const dispatch = useDispatch();
  const Kids_data = useSelector((state) => state.AppReducer.Kids);
  console.log(Kids_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getKidsData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Kids Movies</h1>

      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Kids_data.length > 0 &&
          Kids_data.map((item) => {
            return (
              <div>
              
                <Link to={`/Kids/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Kids;
