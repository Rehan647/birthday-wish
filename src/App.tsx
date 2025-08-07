import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Homep";
import Puzzel from "./components/Puzzel";
import { useState } from "react";
import Final from "./components/Final";

function App() {
  const [dob, setDob] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dob={dob}
              setDob={setDob}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route path="/puzzel" element={<Puzzel userName={userName} setUserName={setUserName} />} />
        <Route path="/final" element={<Final userName={userName} setUserName={setUserName} />} />
      </Routes>
    </Router>
  );
}

export default App;
