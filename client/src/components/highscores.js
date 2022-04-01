import { useState, useEffect } from "react";
import Form from "./form";

function Highscore() {
  // const mockPlayers = [
  //   { nickname: "Eileen", highscore: "3/6" },
  //   { nickname: "Tzima", highscore: "5/6" },
  //   { nickname: "Coleen", highscore: "1/6" },
  // ];
  // const [players, setPlayers] = useState(mockPlayers);
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    fetch("http://localhost:4000/api/scores")
      .then((response) => response.json())
      .then((leaderboard) => {
        setPlayers(leaderboard);
        console.log(players);
      });
  };

  const addScore = (newScore) => {
    setPlayers((players) => [...players, newScore]);
  };

  useEffect(() => {
    getPlayers();
  }, []);
  return (
    <div className="highscores">
      <h3> Highscores </h3>
      <table
        style={{ marginLeft: "auto", marginRight: "auto", fontSize: "2rem" }}
      >
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Highscore</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.index}>
              <td>{player.nickname}</td>
              <td>{player.highscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form addScore={addScore} />
    </div>
  );
}

export default Highscore;
