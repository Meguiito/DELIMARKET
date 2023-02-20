import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Navbar  from "./components/Navbar";
//import Navbar2 from "./components/Navbar2";
import  About  from "./components/About";
import  Factras  from "./components/Users";
import Imagenes from "./components/Imagenes"
import Footer from "./components/Footer"
import Showimages from "./components/Showimages";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <Router>
      <Navbar/>

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Factras/>} />
          <Route path="/Imagenes" element={<Imagenes/>} />
          <Route path="/Showimages" element={<Showimages/>} />
          <Route path="/ImageCard" element={<ImageCard/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
