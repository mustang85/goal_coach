import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
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

  signIn() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div className="form-inline SignIn" style={{margin: '5%'}}>
        <h2>Sign In</h2>
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
            onClick={() => this.signIn()}
            className="btn btn-primary"
            type="button"
          >
            Sign In
          </button>
          <div>{this.state.error.message}</div>
          <div>
            <Link to={'/signup'}>Already a user?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
