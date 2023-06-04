import "./App.css";
import { RoutesMain } from "./routes/index.jsx";
import React from "react";
import { GlobalStyle } from "./style/globalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
    </div>
  );
}

export default App;
