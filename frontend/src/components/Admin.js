import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Admin = () => {
  // Admin Component --- Showing All users data
  const { username, role, users } = useContext(UserContext);

  return (
    <div>
      <h2>
        Hello, {role} {username}
      </h2>
      <h3 style={{ textAlign: 'left' }}>Customer Information Table</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
