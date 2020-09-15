import React from "react";
import Tone from "tone";

const Harmonic = () => {
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");

  return <div>Harmonic trainer</div>;
};

export default Harmonic;
