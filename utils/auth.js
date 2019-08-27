import React, { Component, useEffect } from 'react';
import { Router } from 'next/router';
export default function(AuthComponent) {
  return class Auth extends Component {
    state = {
      isAuthenticated: true,
    };
    // Similar to componentDidMount and componentDidUpdate:
    componentDidMount() {
      console.log('component didmount lifecycle method called');
    }
    render() {
      if (this.state.isAuthenticated) {
        return <AuthComponent {...this.props} />;
      }
    }
  };
}
