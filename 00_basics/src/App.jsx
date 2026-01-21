import React from "react";
import Greet from "./components/Greet";
import MainComponents from "./components/MainComponents";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <MainComponents />
      <Footer />
    </div>
  );
};

export default App;
