import slice from "lodash/slice";
import indexOf from "lodash/indexOf";
import generateAllNotes from "./generateAllNotes";

const pickOctave = (root: string) => {
  const notes = generateAllNotes();
  const rootPos = indexOf(notes, root);
  return slice(notes, rootPos, rootPos + 13);
};

export default pickOctave;
