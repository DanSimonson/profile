import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Views/Home";
import Resume from "./Views/Resume";
import OnlineResume from "./Views/OnlineResume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/onlineresume" element={<OnlineResume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
