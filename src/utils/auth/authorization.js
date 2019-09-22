import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default function requireAuth (WrappedComponent) {

  class Authentication extends Component {

    render () {

      if (!this.props.authenticated) {
        return <Redirect to="/"/>
      }

      return <WrappedComponent { ...this.props }/>
    }
  }

  function mapStateToProps (state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication);
}