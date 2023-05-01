import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import SubHeader from "./SubHeader";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/checkout" element=
          {
          <div>
            <Header />
            <SubHeader />
            <Checkout />
          </div>
          }>
        </Route>
        <Route path="/login">
        </Route>
        <Route path="/" element=
          {
          <div>
            <Header />
            <SubHeader />
            <Home />
          </div>
          }>
        </Route>
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
