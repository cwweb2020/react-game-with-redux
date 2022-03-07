import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes";
import ColorProvider from "./context/ColorProvider";
import "./styles.scss";

const App = () => {
  return (
    <>
      <>
        <ColorProvider>
          <AppRoutes />
        </ColorProvider>
      </>
    </>
  );
};

export default App;
