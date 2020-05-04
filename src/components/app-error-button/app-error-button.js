import React, { Component } from 'react'
import './app-error-button.css'

export default class AppErrorButton extends Component {

    state = {
      renderError: false
    };
  
    render() {
      if (this.state.renderError) {
        this.foo.bar = 0;
      }
      return (
        <button
          className="error-button btn btn-danger btn-lg toggle-planet"
          onClick={() => this.setState({renderError: true})}>
          Throw Error
        </button>
      );
    }
  }