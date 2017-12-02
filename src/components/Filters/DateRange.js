import React, {Component} from 'react';
import {connect} from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import {changeDateRange} from '../../AC/index';
import 'react-day-picker/lib/style.css';


class DateRange extends Component {
  constructor(props) {
    super(props);

    this.defaultRange = props.range;
  }

  handleResetClick = (day) => {
    const { changeDateRange } = this.props;

    changeDateRange(this.defaultRange);
  }



  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props;

    changeDateRange(DateUtils.addDayToRange(day, range));
  }

  render() {
    const { from, to } = this.props.range;
    const selectedRange = from && to && `${from.toLocaleDateString()} — ${to.toLocaleDateString()}`;

    return(
      <div>
        <DayPicker
          onDayClick = {this.handleDayClick}
          selectedDays = { day => DateUtils.isDayInRange(day, { from, to })}
        />
        <p>{selectedRange}
        {from && to && <button onClick = {this.handleResetClick}>Reset</button>}</p>
      </div>
    );
  }
}

export default connect(state => ({
  range: state.filters.dateRange
}), { changeDateRange })(DateRange);