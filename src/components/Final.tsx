import React from 'react'
import "./final.css";
interface PuzzelProps {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
  }

function Final({ userName }: PuzzelProps) {
    return (
        <div className="birthday-banner">
  <h1 className="glow-text">🎉 Happy Birthday <span className="najuk">Najuk</span> 🎉</h1>
</div>
      );
    }
    
    export default Final;