import { useState } from "react";

const Form = ({ addScore }) => {
  const [player, setPlayer] = useState("");

  //create functions that handle the event of the user typing into the form
  const handleNickname = (event) => {
    const nickname = event.target.value;
    setPlayer(nickname);
  };

  //A function to handle the post request
  const postScore = (newScore) => {
    return fetch("http://localhost:4000/api/scores", {
      method: "POST",
      body: JSON.stringify(newScore),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        addScore(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postScore(player);
  };

  return (
    <form onSubmit={handleSubmit} className={"form"}>
      <br></br>
      <span>Save your score?</span>
      <fieldset style={{ border: "none" }}>
        <label style={{ fontSize: "1rem" }}>Nickname </label>
        <input
          type="text"
          id="add-nickname"
          placeholder="Nickname"
          required
          value={player}
          onChange={handleNickname}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
