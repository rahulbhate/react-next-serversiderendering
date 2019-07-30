import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../src/components/Form/Form';
function Login() {
  return (
    <div className="container">
      <h2>SignUp Form</h2>
      <Form />
    </div>
  );
}
export default Login;
