import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdramaData } from "../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import "../Trending/Trending.css";
import Loading from "../../Loading/Loading";
const Drama = () => {
  const dispatch = useDispatch();
  const Drama_data = useSelector((state) => state.AppReducer.Drama);
  // console.log(Drama_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getdramaData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Drama Movies</h1>

      <div className="TrendingDiv">
      {isLoading && <Loading />}
        {Drama_data.length > 0 &&
          Drama_data.map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/Drama/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Drama;
