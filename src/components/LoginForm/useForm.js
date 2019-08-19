import { useReducer, useState,useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const useForm = (callback) => {
  const [token,setToken] = useState();
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );
  

  const handleSubmit = (event) => {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    axios.post(`http://localhost:8080/login`, inputValues).then((res) => {
      console.log(res.data.token);
      const token = res.data.token;
    cookies.set('token', token);
    setToken(token);
    console.log(token);
    
    
      Router.push('/secret');
    })

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
