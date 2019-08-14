import React from 'react';

import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../src/components/LoginForm/LoginForm';
function Login() {
  return (
    <div className="container">
      <h2>Login Form</h2>
      <LoginForm />
    </div>
  );
}
export default Login;
