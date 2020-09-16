import reduce from "lodash/reduce";
import map from "lodash/map";

const generateAllNotes = () => {
  const baseNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const octaves = ["2", "3", "4", "5"];
  return reduce(
    octaves,
    (notes: string[], o: string) => {
      return [...notes, ...map(baseNames, (name) => `${name}${o}`)];
    },
    []
  );
};

export default generateAllNotes;
