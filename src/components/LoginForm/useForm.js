import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import AuthHelperMethods from '../../../utils/AuthHelperMethods';
const useForm = (callback) => {
  const [token, setToken] = useState();
  const Auth = new AuthHelperMethods();
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );
  useEffect(() => {
    console.log('useEffect hook called');
  });

  const handleSubmit = (event) => {
    console.log('Handle Submit Called');
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    Auth.login(inputValues);
    /*axios.post(`http://localhost:8080/login`, inputValues).then((res) => {
      console.log(res.data.token);
      const token = res.data.token;
      localStorage.setItem('rememberMe', token);
      setToken(token);
      console.log(token);
      Router.push('/secret');
    });*/

    callback();
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    inputValues,
  };
};

export default useForm;
