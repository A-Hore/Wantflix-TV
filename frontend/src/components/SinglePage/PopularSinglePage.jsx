import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPopularData } from "../.././Redux/AppReducer/action";

const PopularSinglePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Popular_data = useSelector((state) => state.AppReducer.Popular);
  console.log("Popular", Popular_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Popular_data.length === 0) {
      dispatch(getPopularData());
    }
  }, [Popular_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Popular_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Popular_data]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentTrending?.Title}</h2>
      <div>
        <img src={`${currentTrending.Poster}`} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentTrending?.Year}</div>
      </div>
    </div>
  );
};

export default PopularSinglePage;
