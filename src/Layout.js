import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container-fluid">
      <React.Fragment>
        <Menu />
        <Header />
        {children}
        <Footer />
      </React.Fragment>
      </div>
    );
  }
}
