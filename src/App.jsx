import { useState } from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./comp/header/Header";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
