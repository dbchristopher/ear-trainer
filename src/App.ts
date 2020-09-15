import React from "react";
import { Reset } from "styled-reset";
import Harmonic from "./features/Harmonic";
import AppWrapper from "./layout/AppWrapper";
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <>
      <Reset />
      <AppWrapper>
        <Harmonic />
      </AppWrapper>
    </>
  );
}

export default App;
