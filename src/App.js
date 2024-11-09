import './App.css';
import Login from './components/Login';
import React, { useContext } from 'react';
import Dashboard from './components/Dashboard';
import { UserContext } from './context/UserContext';

function App() {
  const { isLogged } = useContext(UserContext);

  return (
    <div className="App">
      {!isLogged ? (
        //// User Login Component
        <Login />
      ) : (
        //// User Dashboard Component --- Dynamic content based on role
        <Dashboard />
      )}
    </div>
  );
}

export default App;
