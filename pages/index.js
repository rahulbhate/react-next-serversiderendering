// This is the Link API
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import axios from 'axios';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <h5>Login Page.</h5>
    <form className="container">
      <Input
        inputType={'text'}
        title={'Username'}
        id={'name'}
        name={'name'}
        placeholder={'Enter your name'}
      />
      <Input
        inputType={'password'}
        title={'Password'}
        id={'password'}
        name={'password'}
        placeholder={'Enter your password'}
      />
      <Button type={'primary'} title={'Login'} />
    </form>
  </div>
);

export default Index;
