import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Auth from '../utils/auth';
import { Router } from 'next/router';
import { longStackSupport } from 'q';

const serverUrl = 'http://localhost:8080';

// set up cookies
//const cookies = new Cookies();
function Secret() {
  const [isAuthenticated, setAuthenticated] = useState();
  const [clientToken, setToken] = useState();
  useEffect(() => {
    //const token = cookies.get('token');
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
    //const token = cookies.get('token');
    //console.log(token);

    await axios
      .post(serverUrl + '/logout', {})
      .then((res) => {
        console.log(res);
        //cookies.remove(token);
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
/*class Secret extends React.Component {
  onPingCall = async (e) => {
    const token = cookies.get('token');
    console.log(token);

    await axios
      .post(serverUrl + '/logout', {})
      .then((res) => {
        console.log(res);
        cookies.remove(token);
        console.log('token has been removed');
        Router.push('/login');
      })
      .then((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>Secret page</h2>
        <p>Only accessible via a valid JWT</p>
        <br />
        <button onClick={(e) => this.onPingCall(e)}>Logout</button>
        <p>Check console for response</p>
      </div>
    );
  }
}

// Server-Side Rendering
Secret.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router
  await Auth(ctx);

  // Must return an object
  return {};
};

export default Auth(Secret);*/
