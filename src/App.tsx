import React from "react";
import { Reset } from "styled-reset";
import "./App.css";
import * as Tone from "tone";

function App() {
  const hello = async () => {
    // Tone.start() returns a promise, the audio will be ready only after that promise is resolved.
    await Tone.start();
    const now = Tone.now();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    // const now = Tone.now();
    synth.triggerAttack("C4", now);
    synth.triggerAttack("G4", now);
    synth.triggerRelease(["C4", "G4"], now + 2);

    synth.triggerAttack("C4", now + 2);
    synth.triggerAttack("C5", now + 2);
    synth.triggerRelease(["C4", "C5"], now + 4);
  };

  return (
    <div className="App">
      <Reset />
      <button onClick={hello}>hello synth</button>
    </div>
  );
}

export default App;
