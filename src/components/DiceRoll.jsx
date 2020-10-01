import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import d20 from "./d20.png";
import "./DiceRoll.css";

const DiceRoll = () => {
  const [dice, setDice] = useState(0);
  const [sides, setSides] = useState(20);

  const roll = () => {
    const result = Math.ceil(Math.random() * sides);
    setDice(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Dungeons and Dragons Dice</h2>
        <h3>Current Die Size: {sides}</h3>
        <div className="diceSelector">
          <button className="button" onClick={() => setSides(4)}>
            4
          </button>
          <button className="button" onClick={() => setSides(6)}>
            6
          </button>
          <button className="button" onClick={() => setSides(8)}>
            8
          </button>
          <button className="button" onClick={() => setSides(10)}>
            10
          </button>
          <button className="button" onClick={() => setSides(12)}>
            12
          </button>
          <button className="button" onClick={() => setSides(20)}>
            20
          </button>
        </div>
        <Button onClick={roll}>
          <img src={d20} className="App-logo" alt="logo" />
        </Button>
        <h1>Roll: {dice}</h1>
      </header>
    </div>
  );
};

export default DiceRoll;
