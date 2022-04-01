import GuessRow from "./guessRow";
import Keyboard from "./keyboard";

export default function GameBoard() {
  return (
    <div>
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <GuessRow />
      <Keyboard />
    </div>
  );
}
