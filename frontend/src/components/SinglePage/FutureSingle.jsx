import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFeatureReleasedData } from "../.././Redux/AppReducer/action";
import "./SinglePage.css";
const FutureSingle = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Comedy_data = useSelector((state) => state.AppReducer.Featured);

  console.log("Trend", Comedy_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Comedy_data.length === 0) {
      dispatch(getFeatureReleasedData());
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
      <h1 className="Cast">Cast & Crew</h1>
      <div className="ActorsProfile">
        <div>
          <img
            src="https://is3-ssl.mzstatic.com/image/thumb/HvzfGe9ikTmzKuTro-lU-A/492x492bb.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/-aSQlpjweESPMa_jLJrYEw/492x492ve.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is5-ssl.mzstatic.com/image/thumb/JQjesVs_ZFkBTNR92QGzXQ/492x492bb.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/w0Ujbx9q3-7QPrIlXH8NDw/492x492ve.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/OEqGt4xJnvzpnANG_6S5pw/492x492bb.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/LsuVdjXUIUmUiMsEE_jc3Q/492x492bb.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/-aSQlpjweESPMa_jLJrYEw/492x492ve.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FutureSingle;
