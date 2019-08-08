import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from './useForm';

const LgoinForm = () => {
  const { inputValues, handleChange, handleSubmit } = useForm(login);
  function login() {
    console.log(inputValues);
  }

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Input
        type={'email'}
        title={'Email'}
        id={'email'}
        name={'email'}
        value={inputValues.email || ''}
        placeholder={'Enter your email'}
        onChange={handleChange}
      />

      <Input
        type={'password'}
        title={'Password'}
        id={'password'}
        name={'password'}
        value={inputValues.password || ''}
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
      <div className="col-sm-offset-2 col-sm-10">
        <Button title={'Login'} />
      </div>
    </form>
  );
};

export default LgoinForm;
