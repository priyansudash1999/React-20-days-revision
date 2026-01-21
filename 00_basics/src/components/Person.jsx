import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <h2>
        {name}: {age}
      </h2>
    </div>
  );
};

export default Person;
