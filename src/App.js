import React from "react";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
    <div style={{ display:'flex', flexDirection:'column' , gap:'10px', minHeight:'100vh'}}>
      <NavBar />
      <Header />
      <MainContent />
      <Footer />
    </div>
    </>
    
  );
}

export default App;
