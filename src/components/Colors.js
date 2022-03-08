import React, { useEffect } from "react";
import { ColorConsumer } from "../context/ColorProvider";
import IndividualColor from "./individualColors/IndividualColor";
import Spinner from "./Spinner";

const Colors = () => {
  const {
    state: { colors },
    showSpinner,
    setShowSpinner,
  } = ColorConsumer();

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 2000);
  }, [])

  return (
    <>
      <section className="color-container-total">
      {
          showSpinner && <Spinner /> 
      }
       
        <div className="color-container-wrapper">
          { !showSpinner  ? colors.map((col, index) => (
            <IndividualColor key={index} col={col} />
          )) : ""
          }
        </div>
      </section>
    </>
  );
};

export default Colors;
