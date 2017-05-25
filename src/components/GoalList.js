import React, { Component } from 'react';

import GoalItem from './GoalItem';

import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../redux/actions';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        goals.push({...goal.val(), ...{key: goal.key}})
      });
      this.props.setGoals(goals);
    })
  }

  render() {
    return (
      <div className="GoalList" style={{margin: '0 0 30px'}}>
        {
          this.props.goals.map((goal, index) => {
            return <GoalItem key={index} goal={goal} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
