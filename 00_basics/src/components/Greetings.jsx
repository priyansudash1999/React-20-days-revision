import React from "react";

const Greetings = ({ timeOfDay }) => {
  if (timeOfDay === "Morning") {
    return <div>Good Morning</div>;
  } else if (timeOfDay === "Afternoon") {
    return <div>Good Afternoon</div>;
  }
};

export default Greetings;
