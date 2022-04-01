import GuessRow from "./guessRow";
import Keyboard from "./keyboard";
import { useState } from "react";

export default function GameBoard() {
  const [col, setCol] = useState(1);
  const [row, setRow] = useState(1);
  const onDelete = () => {
    if (col > 1) {
      setCol(col - 1);
    }
  };
  const onCheck = () => {
    if (col === 6) {
      setCol(1);
      setRow(row + 1);
    }
  };
  const onChar = (letter) => {
    if (col < 6 && row < 7) {
      // row is 7 unnecessary?
      document.getElementById(`(${row}, ${col})`).innerHTML = letter;
      console.log(
        `new val for (${row}, ${col})`,
        (document.getElementById(`(${row}, ${col})`).letter = letter)
      );
      setCol(col + 1);
    }
    return letter;
  };
  return (
    <div>
      <GuessRow row={1} />
      <GuessRow row={2} />
      <GuessRow row={3} />
      <GuessRow row={4} />
      <GuessRow row={5} />
      <GuessRow row={6} />
      <Keyboard
        id={"keyboard"}
        onChar={onChar}
        onCheck={onCheck}
        onDelete={onDelete}
      />
    </div>
  );
}
