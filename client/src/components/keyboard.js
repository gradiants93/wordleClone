import { useImperativeHandle } from "react";

export default function Keyboard() {
  const onClick = (value) => {
    console.log(value);
    if (value === "ENTER") {
      console.log("Enter");
      //   onEnter();
    } else if (value === "DELETE") {
      console.log("Delete");
      //   onDelete();
    } else {
      console.log("letter");
      //   onChar(value);
    }
  };
  return (
    <div id="keyboard-cont">
      <div className="first-row">
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="Q"
        >
          q
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="W"
        >
          w
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="E"
        >
          e
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="R"
        >
          r
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="T"
        >
          t
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="Y"
        >
          y
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="U"
        >
          u
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="I"
        >
          i
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="O"
        >
          o
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="P"
        >
          p
        </button>
      </div>
      <div className="second-row">
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="A"
        >
          a
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="S"
        >
          s
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="D"
        >
          d
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="F"
        >
          f
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="G"
        >
          g
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="H"
        >
          h
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="J"
        >
          j
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="K"
        >
          k
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="L"
        >
          l
        </button>
      </div>
      <div className="third-row">
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="DELETE"
        >
          Del
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="Z"
        >
          z
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="X"
        >
          x
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="C"
        >
          c
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="V"
        >
          v
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="B"
        >
          b
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="N"
        >
          n
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="M"
        >
          m
        </button>
        <button
          className="keyboard-button"
          onClick={(e) => onClick(e.target.value)}
          value="ENTER"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
