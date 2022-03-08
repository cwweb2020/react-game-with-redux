import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import { ColorConsumer } from "../context/ColorProvider";
import { heartGenerator } from "../helpers";

const ColorsContainer = () => {
  const [hearts, setHearts] = useState([]);
  const {
    state: { lives },
  } = ColorConsumer();

  return (
    <>
      <div className="lives-container">
        <div className="lives-wrapper">
          <div>
            { heartGenerator(lives) }
          </div>
          <h3>Level: 1 </h3>
        </div>
      </div>
      <Colors />
    </>
  );
};

export default ColorsContainer;
