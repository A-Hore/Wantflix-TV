import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularData } from "../../../Redux/AppReducer/action";
import "../Trending/Trending.css"


const Popular = () => {
  const dispatch = useDispatch();
  const Popular_data = useSelector((state) => state.AppReducer.Popular);
  console.log(Popular_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getPopularData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree"> Popular Movies for Free</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Popular_data.length > 0 &&
          Popular_data.map((item) => {
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

export default Popular;






