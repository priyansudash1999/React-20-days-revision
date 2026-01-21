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
import Greetings from "./components/Greetings";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";

const App = () => {
  return (
    <div>
      <Greetings timeOfDay={"Morning"} />
      <UserStatus isAdmin={false} loggedIn={true} />
      <Weather temp={16} />
    </div>
  );
};

export default App;
