import indexOf from "lodash/indexOf";
import map from "lodash/map";
import generateAllNotes from "./generateAllNotes";

const generateKey = (root: string) => {
  const keyPattern = [0, 2, 2, 1, 2, 2, 2, 1];
  const notes = generateAllNotes();
  const rootPos = indexOf(notes, root);
  let notePos = rootPos;
  const key = map(keyPattern, (interval) => {
    notePos += interval;
    return notes[notePos];
  });
  return key;
};

export default generateKey;
