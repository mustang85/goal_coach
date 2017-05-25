import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  addGoal() {
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({ email, title });
  }

  render() {
    return (
      <div className="form-inline AddGoal">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a goal"
            onChange={event => this.setState({title: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.addGoal();
              }
            }}
          />
          <button
            style={{margin: '5% 0'}}
            onClick={() => this.addGoal()}
            className="btn btn-success"
            type="button"
          >
            Add Goal
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user
  }), null
)(AddGoal);
