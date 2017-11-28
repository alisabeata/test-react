import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from "../AC";

// function mapStateToProps(state) {
//   return {
//     counter: state.count
//   };
// }
//
// const mapToDispatch = { increment };
//

class Counter extends Component {
  handleIncrement = () => {
    console.log('----', 'incrementing');
    this.props.increment()
  }

  render() {
    return(
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick = {this.handleIncrement}>increment me</button>
      </div>
    );
  }
}

Counter.PropTypes = {
  counter: PropTypes.number
};

// connect(mapStateToProps, mapToDispatch)(Counter);

export default connect((state) => ({counter: state.count}), { increment })(Counter);