import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  state = {
    username: ''
  };

  handleUserChange = (event) => {

    if (event.target.value.length > 10) return;

    this.setState({
      username: event.target.value
    });

  }

  render() {
    return(
      <div>
        Name: <input type = 'text' val = {this.state.username} onChange = {this.handleUserChange} />
      </div>
    );
  }
}

export default UserForm;