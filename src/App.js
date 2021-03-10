import React from "react";
import './App.css';
import Header from "./Components/Navigation/Header";
import MainBody from "./Components/MainBody/MainBody";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <MainBody/>
    <Footer/>
    </div>
  );
}

export default App;
