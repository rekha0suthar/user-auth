import React, { useContext } from 'react';
import Admin from './Admin';
import User from './User';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { role } = useContext(UserContext);

  return <div>{role === 'admin' ? <Admin /> : <User />}</div>;
};

export default Dashboard;
