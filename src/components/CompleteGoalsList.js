import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../redux/actions';

class CompleteGoalsList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title});
      });
      this.props.setCompleted(completeGoals)
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    const { completedGoals } = this.props;
    return (
      <div className='CompleteGoalsList' style={{margin: '0 0 20px'}}>
        {
          completedGoals.map(({email, title}, index) => {
            return (
              <div key={index}>
                <strong>{title}</strong> completed by
                <em style={{float: 'right'}}>{email}</em>
              </div>
            );
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    completedGoals: state.completedGoals
  }),
  { setCompleted }
)(CompleteGoalsList);
