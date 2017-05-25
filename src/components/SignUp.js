import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  signUp() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div className="form-inline SignUp" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            style={{margin: '0 5% 0 0'}}
            type="text"
            className="form-control"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{margin: '0 5% 0 0'}}
            type="password"
            className="form-control"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            style={{margin: '5% 0'}}
            onClick={() => this.signUp()}
            className="btn btn-primary"
            type="button"
          >
            Sign Up
          </button>
          <div>{this.state.error.message}</div>
          <div>
            <Link to={'/signin'}>Sign in instead</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
