import React, { useEffect, useState } from "react";

export default function GuessSquare({ col, row }) {
  const [letter, setLetter] = useState(null);
  let value;
  useEffect(() => {
    setLetter(value);
  }, []);
  return (
    <>
      <div className="guessSquare" id={`(${row}, ${col})`} value={letter}>
        {value}
      </div>
    </>
  );
}
