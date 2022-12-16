import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComedyData } from "../.././Redux/AppReducer/action";
import "./SinglePage.css";
const ComedySingle = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Comedy_data = useSelector((state) => state.AppReducer.Comedy);
  console.log("Trend", Comedy_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Comedy_data.length === 0) {
      dispatch(getComedyData());
    }
  }, [Comedy_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Comedy_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Comedy_data]);
  return (
    <div className="Single">
      <div>
        <h2 className="Title">You'r Watching Now -{currentTrending?.Title}</h2>
        <div>
          <img
            className="Poster"
            src={`${currentTrending.Poster}`}
            alt="Cover Pic"
          />
        </div>
        <div>
          <div>{currentTrending?.Year}</div>
        </div>
      </div>
    </div>
  );
};

export default ComedySingle;
