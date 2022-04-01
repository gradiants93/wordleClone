import "./App.css";
import GameBoard from "./components/gameboard";
import Highscore from "./components/highscores";

function App() {
  return (
    <div className="App">
      <strong>Not Wordle</strong> tm
      <GameBoard />
      <Highscore />
    </div>
  );
}

export default App;
