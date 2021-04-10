import logo from './logo.svg';
import './App.css';
import React from "react";
import Data from './data';
import FetchApi from './FetchApi';
import FetchApiPost from './fetchApiPost';

function App() {
  return (
    <div className="App">
      <FetchApi />
      <FetchApiPost />
    </div>
  );
}

export default App;
