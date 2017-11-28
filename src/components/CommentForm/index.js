import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentAdd.css';

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};

class CommentAdd extends Component {
  state = {
    user: '',
    text: ''
  };

  handleChange = (type) => (event) => {
    const {value} = event.target;

    if (value.length > limits[type].max) return;

    this.setState({
      [type]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      user: '',
      text: ''
    });
  }

  getClassName = (type) => this.state[type].length && this.state[type].length < limits[type].min ? 'fild-error' : '';

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <br  />
        Add comment: <br  /><br  />
        Name: <input
          className = {this.getClassName('user')}
          type = 'text'
          value = {this.state.user}
          onChange = {this.handleChange('user')}
        /><br /><br />
        Comment: <textarea
          cols = '30'
          rows = '10'
          className = {this.getClassName('text')}
          value = {this.state.text}
          onChange = {this.handleChange('text')}
        /><br  /><br  />
        <button>Submit</button>
      </form>
    );
  }
}

export default CommentAdd;