import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentData } from "../.././Redux/AppReducer/action";
import "./SinglePage.css";
const CurrentSingle = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Comedy_data = useSelector((state) => state.AppReducer.Current);

  console.log("Trend", Comedy_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Comedy_data.length === 0) {
      dispatch(getCurrentData());
    }
  }, [Comedy_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Comedy_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Comedy_data]);
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

export default CurrentSingle;