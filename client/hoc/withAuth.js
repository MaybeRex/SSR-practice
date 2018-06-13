import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (ComposedComponent) => {
  class Auth extends Component {
    render() {
      if(this.props.isAuth === null) {
        return <div>Loading...</div>
      }

      if(!this.props.isAuth) {
        return <Redirect to="/" />
      }

      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth
  })

  return connect(mapStateToProps)(Auth);
}

export default withAuth;
