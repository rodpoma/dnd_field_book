import React, {useState} from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import d20 from "./assets/d20.png";
import jojo from "./assets/Jojo face.png";
import "./DiceRoll.css";
import {MDBContainer} from "mdbreact";

const DiceRoll = () => {
  const [dice, setDice] = useState(0);
  const [sides, setSides] = useState(20);
  const [toggle, setToggle] = useState(false);

  return (
    <MDBContainer fluid className="page">
      <header className="App-header">
        <h2>Dungeons and Dice</h2>
        <Button className="button" onClick={() => setToggle(!toggle)}>
          {toggle === false ? "Intensify" : "ITS TOO MUCH POWER!"}
        </Button>
        <h3 className="mt-5">Current Die Size: {sides}</h3>
        <ButtonGroup aria-label="outlined primary button group">
          <Button className="button" size="large" onClick={() => setSides(4)}>
            4
          </Button>
          <Button className="button" size="large" onClick={() => setSides(6)}>
            6
          </Button>
          <Button className="button" size="large" onClick={() => setSides(8)}>
            8
          </Button>
          <Button className="button" size="large" onClick={() => setSides(10)}>
            10
          </Button>
          <Button className="button" size="large" onClick={() => setSides(12)}>
            12
          </Button>
          <Button className="button" size="large" onClick={() => setSides(20)}>
            20
          </Button>
        </ButtonGroup>
        <Button onClick={() => setDice(Math.ceil(Math.random() * sides))}>
          {toggle === false ? (
            <img src={d20} className="App-logo" alt="logo" />
          ) : (
            <img src={jojo} className="App-logo" alt="logo" />
          )}
        </Button>
        <h1 className="mt-5">Roll: {dice}</h1>
      </header>
    </MDBContainer>
  );
};

export default DiceRoll;
