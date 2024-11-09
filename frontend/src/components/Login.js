import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    role,
    setRole,
    setUsers,
    setIsLogged,
  } = useContext(UserContext);

  // Method to submit user data
  const handleForm = async (e) => {
    e.preventDefault();
    const newUser = { username: username, password: password, role: role };
    try {
      const response = await axios.post(
        'https://role-auth-backend.vercel.app/api/user/login',
        newUser,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      let userId = response.data._id;

      console.log(userId);
      fetchUserDetail(userId);
      setIsLogged(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch Specific user detail method based on user Id
  const fetchUserDetail = async (userId) => {
    try {
      const response = await axios.get(
        `https://role-auth-backend.vercel.app/api/user/${userId}` /// get api to fetch user detail
      );
      if (role === 'admin') {
        /// receiving and storing different responses based on user role
        setUsers(response.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>User Role</label>
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Login;
