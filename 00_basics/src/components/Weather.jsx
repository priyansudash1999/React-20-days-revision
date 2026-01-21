import React from "react";

const Weather = ({ temp }) => {
  if (temp < 15) {
    return <div>Its cold outside</div>;
  } else if (temp > 15 && temp < 25) {
    return <div>Its nice</div>;
  } else {
    return <div>Its hot</div>;
  }
};

export default Weather;
