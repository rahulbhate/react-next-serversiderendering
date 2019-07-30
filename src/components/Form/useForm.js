import { useState } from 'react';
import axios from 'axios';
const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    alert('your form is submitted');

    console.log(values);
    console.log('******************');
    axios.post(`http://localhost:8080/signup`).then((res) => {
      console.log(res);
    });
    event.target.value = '';
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
