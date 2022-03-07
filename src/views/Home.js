import React, { useEffect } from "react";
import ColorsContainer from "../components/ColorsContainer";
import { ColorConsumer } from "../context/ColorProvider";

const Home = () => {
  const { gameStart } = ColorConsumer();

  useEffect(() => {
    gameStart();
  }, []);

  return (
    <>
      <section className="home-total">
        <ColorsContainer />
      </section>
    </>
  );
};

export default Home;
