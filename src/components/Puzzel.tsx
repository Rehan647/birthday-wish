import React, { useState } from "react";
import "./Puzzel.css";
import { useNavigate } from 'react-router-dom';



interface PuzzelProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}
export default function Puzzel({ userName }: PuzzelProps) {
  const navigate = useNavigate();
  const array = ["stone", "paper", "scissor"];
  const [computer, setComputer] = useState("");
  const [human, setHuman] = useState("");
  const [result, setResult] = useState("");
  const [hasWon, setHasWon] = useState("");
  const playGame = (input: string) => {
    const comp = array[Math.floor(Math.random() * 3)];
    setHuman(input);
    setComputer(comp);
    getAns(input, comp);
  };
  const getAns = (input: string, comp: string) => {
    if (input.toLowerCase() === comp) {
      setHasWon("false");
      setResult("It's a draw!");
    } else if (
      (input === "stone" && comp === "scissor") ||
      (input === "paper" && comp === "stone") ||
      (input === "scissor" && comp === "paper")
    ) {
      navigate('/final');
      // navigate('/puzzel');
      // alert('you won');
    } else {
      setHasWon("false");
      setResult(`${userName}, play well!`);
    }
  };
  return (
    <div className="puzzel-page-background">
      <div className="outermost">
        <div className="puzzel-outer">
          <h1>🎂 Happy Birthday Game, {userName}! 🎉</h1>
          <p>Choose your weapon:</p>
          <div className="puzzel-buttons">
            <button onClick={() => playGame("stone")}>🪨 Stone</button>
            <button onClick={() => playGame("paper")}>📄 Paper</button>
            <button onClick={() => playGame("scissor")}>✂️ Scissor</button>
          </div>
        </div>

        {hasWon !== null && human && computer && (
  <div className="puzzel-inner">
    <p>🎈 Your choice: <strong>{human}</strong></p>
    <p>🎁 Computer's choice: <strong>{computer}</strong></p>
    <h2>{result}</h2>
  </div>
)}
      </div>
    </div>
  );
}