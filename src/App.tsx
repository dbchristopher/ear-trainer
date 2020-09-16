import React from "react";
import { Reset } from "styled-reset";
import "./App.css";

function App() {
  const hello = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new (window as any).Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div className="App">
      <Reset />
      <button onClick={hello}>hello</button>
    </div>
  );
}

export default App;
