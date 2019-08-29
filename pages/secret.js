import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from '../utils/auth';
import { Router } from 'next/router';

const serverUrl = 'http://localhost:8080';


function Secret() {
  const [isAuthenticated, setAuthenticated] = useState();
  const [clientToken, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem('rememberMe');
    console.log(token);
    if (token) {
      setAuthenticated(true);
      setToken(token);
      console.log(clientToken);
    } else {
      setAuthenticated(false);
      //Router.push('/login');
    }
    console.log('useEffect hook called');
  });
  const logout = async () => {
    await axios
      .post(serverUrl + '/logout', {})
      .then((res) => {
        console.log(res);
        setToken('');
        localStorage.removeItem('rememberMe');
        console.log('token has been removed');
      })
      .then((error) => {
        console.log(error);
      });
  };
  return isAuthenticated ? (
    <div>
      {' '}
      <h3>This is secret page</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <h3>You are not authorized user</h3>
    </div>
  );
}
export default Auth(Secret);