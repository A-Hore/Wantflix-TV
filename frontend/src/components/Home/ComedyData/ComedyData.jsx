import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getComedyData } from "../../../Redux/AppReducer/action";
import Loading from "../../Loading/Loading";
// import "../Trending.css";
const ComedyData = () => {
  const dispatch = useDispatch();
  const Comedy_data = useSelector((state) => state.AppReducer.Comedy);
  // console.log(Comedy_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getComedyData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">All Comedy series watch</h1>
      <div className="TrendingDiv">
      {isLoading && <Loading />}
        {Comedy_data.length > 0 &&
          Comedy_data.map((item) => {
            return (
              <Link key={item._id} to={`/Comedy/${item._id}`}>
                <img src={item.Poster} alt={item.Title} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ComedyData;
