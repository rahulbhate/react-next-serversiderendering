import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from '../src/components/SignUpForm/SignUpForm';
function Signup() {
  return (
    <div className="container">
      <h2>SignUp Form</h2>
      <SignUpForm />
    </div>
  );
}
export default Signup;
