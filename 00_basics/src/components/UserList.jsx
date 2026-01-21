import React from "react";

const UserList = () => {
  const userdata = [
    { id: 1, name: "Priyansu", age: 27 },
    { id: 2, name: "Babu", age: 22 },
    { id: 3, name: "Hyati", age: 54 },
  ];

  return (
    <div>
      {userdata.map((data, id) => (
        <ul key={id}>
          <li>{data.name}</li>
          <li>{data.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
