import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withAuth from '../utils/withAuth';
import { Router } from 'next/router';
import decode from 'jwt-decode';
const serverUrl = 'http://localhost:8080';

function Secret() {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [clientToken, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem('rememberMe');
    console.log(token);

    if (token) {
      const decoded = decode(token);
      setAuthenticated(true);
      setToken(token);
      console.log(clientToken);
      console.log(decoded);
      if (decoded.exp < Date.now() / 1000) {
        setAuthenticated(false);
        localStorage.removeItem('rememberMe');
      }
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
export default withAuth(Secret);
