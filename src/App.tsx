import React from "react";
import { Reset } from "styled-reset";
import * as Tone from "tone";

function App() {
  const sampler = new Tone.Sampler({
    urls: {
      A2: "A2.mp3",
      C3: "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      A3: "A3.mp3",
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    baseUrl: "/instruments/",
  }).toDestination();

  const helloPiano = async () => {
    await Tone.start();

    Tone.loaded().then(() => {
      sampler.triggerAttackRelease(["C3", "C4"], 1);
    });
  };

  return (
    <div className="App">
      <Reset />
      <button onClick={helloPiano}>hello piano</button>
    </div>
  );
}

export default App;
