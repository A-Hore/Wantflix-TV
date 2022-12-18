import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOriginalData } from "../../../Redux/AppReducer/action";
import Loading from "../../Loading/Loading";
import "../Trending/Trending.css";
const Original = () => {
  const dispatch = useDispatch();
  const Original_data = useSelector((state) => state.AppReducer.Original);
  console.log(Original_data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch( getOriginalData );
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">Latest Originals released</h1>
     
      <div className="TrendingDiv">
      {isLoading && <Loading />}
        {Original_data.length > 0 &&
          Original_data.map((item) => {
            return (
              <Link to={`Original/${item._id}`}>
                <img src={item.Poster} alt={item.Title} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Original ;
