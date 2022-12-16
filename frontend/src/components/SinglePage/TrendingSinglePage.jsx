import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrendingData } from "../.././Redux/AppReducer/action";
import "./SinglePage.css";
const SinglePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Trending);
  console.log("Trend", Trending_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Trending_data.length === 0) {
      dispatch(getTrendingData());
    }
  }, [Trending_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Trending_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Trending_data]);
  return (
    <div className="Single">
      <div>
        <h2 className="Title">
          You'r Watching Now :- {currentTrending?.Title}-: Movie
        </h2>
        <div>
          <img
            className="Poster"
            src={`${currentTrending.Poster}`}
            alt="Cover Pic"
          />
        </div>
        <div className="RelatedFilms">
          <div>
            <h1>Information</h1>
            <p> Genre : {currentTrending?.Genre}</p>
            <p> Released Year : {currentTrending?.Year}</p>
            <p> imdbRating: {currentTrending?.imdbRating}</p>
          </div>
          <div>
            <h1>Language</h1>
            <p> Language: {currentTrending?.Language}</p>
            <p> Runtime: {currentTrending?.Runtime}</p>
            <p> Type: {currentTrending?.Type}</p>
          </div>
          <div>
            <h1>Accessibility</h1>
            <p>Country: {currentTrending?.Country}</p>
          </div>
        </div>

        <p className="About">About: {currentTrending?.Plot}</p>
      </div>
    </div>
  );
};

export default SinglePage;
