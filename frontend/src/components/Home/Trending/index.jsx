import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingData } from "../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import "./Trending.css";
import Loading from "../../Loading/Loading";
const Trending = () => {
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Trending);
  // console.log(Trending_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getTrendingData);
  }, [dispatch]);
  return (
    <>
      {/* <hr className="colourh" /> */}
      <h1 className="Watchfree">Watch Premium and Trending Movies for Free </h1>

      <div className="TrendingDiv">
        {isLoading && <Loading />}
        {Trending_data.length > 0 &&
          Trending_data.map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/Movies/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Trending;
