import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/UserSlice";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="dash-head-container">
      <h1 style={{ fontSize: 32 }}> Hi, {user.name}! </h1>
    </div>
  );
};

export default Header;
