import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { firebaseApp } from './firebase';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import reducers from './redux/reducers';
import { logUser } from './redux/actions';

let user = null;

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/signin" render={() => (
              user ? <App /> : <SignIn />
            )} />
          </div>
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  } else {
    user = null;
    console.log('user has signed out or still needs to sign in.');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/app' component={App} />
      <Route path="/signin" render={() => (
        user ? <App /> : <SignIn />
      )} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
