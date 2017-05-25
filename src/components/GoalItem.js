import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, key } = this.props.goal;
    goalRef.child(key).remove();
    completeGoalRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.goal;

    return (
      <div className="GoalItem" style={{margin: '0 0 15px 0'}}>
        <strong>{title}</strong>
        <span style={{margin: '0 5px 0 0'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Comlete
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user
  }),
  null
)(GoalItem);

