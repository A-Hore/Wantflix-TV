import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPopularData } from "../../../Redux/AppReducer/action";
import Loading from "../../Loading/Loading";
import "../Trending/Trending.css";

const Popular = () => {
  const dispatch = useDispatch();
  const Popular_data = useSelector((state) => state.AppReducer.Popular);
  // console.log(Popular_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getPopularData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree"> Most Popular Series</h1>
      <div className="TrendingDiv">
      {isLoading && <Loading/>}
        {Popular_data.length > 0 &&
          Popular_data.map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/Popular/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Popular;
