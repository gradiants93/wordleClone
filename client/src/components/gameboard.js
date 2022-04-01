import GuessRow from "./guessRow";
import Keyboard from "./keyboard";
import { useState } from "react";

export default function GameBoard() {
  // states
  //   const [word, setWord] = useState([]);
  const [col, setCol] = useState(1);
  const [row, setRow] = useState(1);
  const [guess, setGuess] = useState([]);

  // mock data
  const mockWord = ["a", "p", "p", "l", "e"];
  const [word, setWord] = useState(mockWord);
  //handlers
  const onDelete = () => {
    if (col > 1) {
      setCol(col - 1);
      guess.pop();
      setGuess(guess);
      document.getElementById(`(${row}, ${col - 1})`).innerHTML = " ";
      document.getElementById(`(${row}, ${col - 1})`).letter = " ";
    }
  };
  const onCheck = () => {
    if (col === 6) {
      setCol(1);
      setRow(row + 1);
      console.log("guess", guess, "word", word, guess.join() === word.join());
      setGuess([]);
    }
  };
  const onChar = (letter) => {
    if (col < 6 && row < 7) {
      // row is 7 unnecessary?
      document.getElementById(`(${row}, ${col})`).innerHTML = letter;
      document.getElementById(`(${row}, ${col})`).letter = letter;
      console.log(
        `new val for (${row}, ${col})`,
        document.getElementById(`(${row}, ${col})`).letter
      );
      setCol(col + 1);
      setGuess(guess.concat(letter.toLowerCase()));
    }
    return letter;
  };

  // logic

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
