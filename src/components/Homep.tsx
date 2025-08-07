import React from 'react'
import "./home.css";
// import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./home.css";
interface HomeProps {
    dob: string;
    setDob: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
  }

export default function home({ dob, setDob, userName, setUserName }: HomeProps) {
    // const { dob, userName } = props;
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // userName.toLowerCase;
      if (userName.toLowerCase() ==="najuk" && dob=== '2000-08-08') {
        // alert(`Welcome ${userName}, DOB saved: ${dob}`);
        // You can navigate or show another component now
        alert(`🎉 Happy Birthday Najuk!`);
        console.log("Navigating to /puzzel");
        navigate('/puzzel');
      }else{
        alert('❌ Invalid name or DOB.');
        // setUserName(" ");
        // setDob("");

      }
    };
  return (
    <div className="background">
    <h1 className="heading">Birthday wish for <span className="najuk">Najuk</span></h1>
    <h2 className="sub-heading">
      Hey, Najuk! Finally it's your birthday — we planned it very well!
    </h2>
    <form className='birthday-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="2000-01-01"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <button type="submit">Go Ahead</button>
    </form>
  </div>
  )
}
