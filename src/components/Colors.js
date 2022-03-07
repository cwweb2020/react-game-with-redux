import React from "react";
import { ColorConsumer } from "../context/ColorProvider";
import IndividualColor from "./individualColors/IndividualColor";

const Colors = () => {
  const {
    state: { colors },
  } = ColorConsumer();

  return (
    <>
      <section className="color-container-total">
        <div className="color-container-wrapper">
          {colors.map((col, index) => (
            <IndividualColor key={index} col={col} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Colors;
