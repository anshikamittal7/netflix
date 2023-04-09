import React from "react";
import logo from "../Components/logo.png";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <span>
        <Link to="/">Home</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/new&popular">New & Popular</Link>
        <Link to="/mylist">My List</Link>
      </span>
      <GoSearch />
    </nav>
  );
};

export default Header;
