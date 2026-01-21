import React from "react";
import Greet from "./components/Greet";
import MainComponents from "./components/MainComponents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
    </div>
  );
};

export default App;
