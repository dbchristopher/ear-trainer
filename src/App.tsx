import React from "react";
import { Reset } from "styled-reset";
import "./App.css";
import * as Tone from "tone";

function App() {
  const hello = async () => {
    const note1 = () => {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n", now);
    };

    const note2 = () => {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("G4", "8n", now);
    };

    await Tone.start();
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    const now = Tone.now();
    note1();
    note2();
  };

  return (
    <div className="App">
      <Reset />
      <button onClick={hello}>hello</button>
    </div>
  );
}

export default App;
