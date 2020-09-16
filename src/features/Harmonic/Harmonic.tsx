import React from "react";
import * as Tone from "tone";
import piano from "../../samples/piano";
import generateAllNotes from "../utils/generateAllNotes";

const Harmonic = () => {
  const helloPiano = async () => {
    await Tone.start();
    Tone.loaded().then(() => {
      piano.triggerAttackRelease(["C3", "C4"], 1);
    });
  };
  console.log(generateAllNotes());
  return <button onClick={helloPiano}>hello piano</button>;
};

export default Harmonic;
