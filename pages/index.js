// This is the Link API
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
//import Button from 'react-reusable-components/src/components/Button/Button';
class Index extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // component will be able to read from store's state when rendered
    store.dispatch({ type: 'FOO', payload: 'foo' });
    // you can pass some custom props to component from here
    return { custom: 'custom' };
  }
  render() {
    return (
      <div>
        <div>Prop from Redux {JSON.stringify(this.props.foo)}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
      </div>
    );
  }
}

export default connect((state) => state)(Index);
