import GuessSquare from "./guessSquare";

export default function GuessRow({ row }) {
  return (
    <div className="guessRow" id={row}>
      <GuessSquare row={row} col={1} />
      <GuessSquare row={row} col={2} />
      <GuessSquare row={row} col={3} />
      <GuessSquare row={row} col={4} />
      <GuessSquare row={row} col={5} />
    </div>
  );
}
