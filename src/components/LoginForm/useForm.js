import { useReducer } from 'react';
import axios from 'axios';
const useForm = (callback) => {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );
  

  const handleSubmit = (event) => {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    axios.post(`http://localhost:8080/login`, inputValues).then((res) => {
      console.log(res);
    });

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
