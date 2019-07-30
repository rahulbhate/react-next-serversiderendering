import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from './useForm';

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    console.log(values);
    alert('Called Login');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-12">
          <Input
            inputType={'email'}
            title={'Email'}
            id={'email'}
            name={'email'}
            value={values.email}
            placeholder={'Enter your email'}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Input
            inputType={'password'}
            title={'Password'}
            id={'password'}
            name={'password'}
            value={values.password}
            placeholder={'Enter your password'}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button type={'primary'} title={'Login'} />
    </form>
  );
};

export default Form;
