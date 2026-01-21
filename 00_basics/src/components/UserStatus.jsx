import React from "react";

const UserStatus = ({ isAdmin, loggedIn }) => {
  if (isAdmin && loggedIn) {
    return <div>Welcome Admin</div>;
  } else if (!isAdmin && loggedIn) {
    return <div>Welcome User</div>;
  }
};

export default UserStatus;
