import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalsList from './CompleteGoalsList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App" style={{margin: '5%'}}>
        <h3>Goal Coach</h3>
        <AddGoal />

        <h4>Goals</h4>
        <GoalList />

        <h4>CompleteGoalsList</h4>
        <CompleteGoalsList />

        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default connect((state) => ({
  email: state
}),null)(App);
