import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    alert('your form is submitted');
    console.log(' ******************');
    console.log(values);
    console.log('******************');
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
