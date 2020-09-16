import React from "react";
import * as Tone from "tone";
import keys from "lodash/keys";
import toString from "lodash/toString";
import piano from "../../samples/piano";
import intervalMap from "../utils/intervalMap";
import pickOctave from "../utils/pickOctave";

const Harmonic = () => {
  const selectedIntervals: any = intervalMap;
  const intervalKeys = keys(selectedIntervals);

  const helloPiano = async () => {
    const harmonyToPlay =
      intervalKeys[Math.floor(Math.random() * intervalKeys.length)];
    const notes = pickOctave("C3");

    console.log(selectedIntervals, notes);
    console.log(selectedIntervals[harmonyToPlay]);

    await Tone.start();
    Tone.loaded().then(() => {
      piano.triggerAttackRelease(["C3", notes[Number(harmonyToPlay)]], 1.5);
    });
  };
  // console.log(pickOctave("C3"));
  // console.log(intervalMap);

  return <button onClick={helloPiano}>hello piano</button>;
};

export default Harmonic;
