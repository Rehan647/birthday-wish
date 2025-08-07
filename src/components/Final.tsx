import React from "react";
import "./final.css";
interface PuzzelProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

function Final({ userName }: PuzzelProps) {
  return (
    <div className="final-container">
  <div className="image-container">
    <img src="/mom.jpeg" alt="img1" className="img top-left" />
    <img src="/rehan.jpeg" alt="img2" className="img top-right" />
    <img src="/don.jpeg" alt="img3" className="img bottom-left" />
    <img src="/last.jpeg" alt="img4" className="img bottom-right" />
  </div>

  <div className="video-wrapper">
    <video width="100%" height="auto" controls>
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="birthday-banner">
    <h1 className="glow-text">
      🎉 Happy Birthday <span className="najuk">Najuk</span> 🎉
    </h1>
  </div>
</div>
  );
}

export default Final;
