import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.postimg.cc/8zZthrxM/wantflixn.png"
          alt=""
        />
      </Link>
      {/* <div><SearchIcon style={{color:"white"}}/></div> */}
      <div className="header_search">
        <Link to="/search">
          <input
            className="header_searchInput"
            type="text"
            placeholder="Search"
          />
        </Link>
      </div>

      <div className="signin_but">
        <Link to="/login">
          <button className="but">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
