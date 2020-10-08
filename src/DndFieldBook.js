import React from "react";
import DiceRoll from "./components/DiceRoll.jsx";
import Board from "./components/Board.jsx";
import Instructions from "./components/Instructions.jsx";
import Navbar from "./components/NavBar.jsx";
import Menu from "./components/Menu.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import "./DndFieldBook.css";

import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DndFieldBook = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={DiceRoll} />
        <Route path="/board" component={Board} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/Menu" component={Menu} />
      </BrowserRouter>
    </div>
  );
};

export default DndFieldBook;
