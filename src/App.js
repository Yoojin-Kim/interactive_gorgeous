import React from 'react';
import './App.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
