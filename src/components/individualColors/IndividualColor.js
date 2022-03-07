import React from "react";
import style from "./individualStyle.module.scss";

const IndividualColor = ({ col }) => {
  return (
    <>
      <div className="color_box" style={{ backgroundColor: col }}></div>
    </>
  );
};

export default IndividualColor;
