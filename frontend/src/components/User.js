import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
  // User Component --- showing user's username and role
  const { username, role } = useContext(UserContext);

  return (
    <div>
      <h2>
        Hello, {role} {username} Welcome!
      </h2>
    </div>
  );
};

export default User;
