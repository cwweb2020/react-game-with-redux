import React from "react";
// import style from "./individualStyle.module.scss";
import { ColorConsumer } from "../../context/ColorProvider";

const IndividualColor = ({ col }) => {
  const { compareColorPicked } = ColorConsumer()
  
   const handleClick = (clickedColor) => {
        compareColorPicked(clickedColor)
       // console.log(clickedColor);
   }

  return (
    <>
      <div className="color_box" style={{ backgroundColor: col }}
        onClick={() => handleClick(col)}
      ></div>
    </>
  );
};

export default IndividualColor;
