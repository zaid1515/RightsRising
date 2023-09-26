import React from "react";
import "./Games.css";
import Gamecard from "../../components/Cards/Gamecard";

export default function Gamespg() {
  return (
    <div className="gamesContainer">
      <div className="gamesWrapper">
        <div className="gamecards">
          <div className="gridWrapper">
            <div className="game1">
              <Gamecard name={"Scrabble"} className="game1" gp1={"game1"}/>
            </div>
            <div className="game2">
              <Gamecard name={"Quiz"} />
            </div>
            <div className="game3">
              <Gamecard name={"3D Game"} />
            </div>
            <div className="game4">
              <Gamecard name={"Hangman"} />
            </div>
            <div className="game5">
              <Gamecard name={"Hangman"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
