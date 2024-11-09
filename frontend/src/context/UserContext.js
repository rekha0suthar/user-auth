import React, { createContext, useState } from 'react';

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        role,
        setRole,
        users,
        setUsers,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
