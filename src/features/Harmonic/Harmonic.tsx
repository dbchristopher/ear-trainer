import React from "react";
import * as Tone from "tone";
import piano from "../../samples/piano";
import generateKey from "../utils/generateKey";
import intervalMap from "../utils/intervalMap";

const Harmonic = () => {
  const helloPiano = async () => {
    await Tone.start();
    Tone.loaded().then(() => {
      piano.triggerAttackRelease(["C3", "C4"], 1);
    });
  };
  console.log(generateKey("C3"));
  console.log(intervalMap);
  return <button onClick={helloPiano}>hello piano</button>;
};

export default Harmonic;
