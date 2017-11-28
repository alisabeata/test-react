import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DateRange extends Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  state = this.getInitialState();

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleResetClick = () => {
    this.setState(this.getInitialState());
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  render() {
    const { from, to } = this.state;

    return(
      <div>
        <DayPicker
          onDayClick = {this.handleDayClick}
          selectedDays = {[from, { from, to }]}
        />
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && <button onClick={this.handleResetClick}>Reset</button>}
        </p>
      </div>
    );
  }
}

DateRange.PropTypes = {

};

export default DateRange;