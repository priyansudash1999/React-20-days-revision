import React from "react";
import Greet from "./components/Greet";
import MainComponents from "./components/MainComponents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import Person from "./components/Person";

const App = () => {
  return (
    <div>
      <Person name="Priyansu" age={24} />
    </div>
  );
};

export default App;
