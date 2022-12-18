import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getclitterData } from "../../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import "../Trending/Trending.css";
import Loading from "../../Loading/Loading";
const Clitter = () => {
  const dispatch = useDispatch();
  const Clitter_data = useSelector((state) => state.AppReducer.Clitter);
  // console.log(Clitter_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getclitterData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Clitter shows</h1>

      <div className="TrendingDiv">
      {isLoading && <Loading />}
        {Clitter_data.length > 0 &&
          Clitter_data.map((item) => {
            return (
              <div key={item._id}>
                <Link to={`/Clitter/${item._id}`}>
                  <img src={item.Poster} alt={item.Title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Clitter;
