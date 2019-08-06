import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from './useForm';

const SignUpForm = () => {
  const { values, handleChange, handleSubmit } = useForm(login);
  function login() {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Input
        inputType={'email'}
        title={'Email'}
        id={'email'}
        name={'email'}
        value={values.email}
        placeholder={'Enter your email'}
        onChange={handleChange}
      />
      <Input
        inputType={'password'}
        title={'Password'}
        id={'password'}
        name={'password'}
        value={values.password}
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
      <div className="col-sm-offset-2 col-sm-10">
        <Button type={'primary'} title={'SignUp'} />
      </div>
    </form>
  );
};

export default SignUpForm;
