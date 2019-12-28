import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class Schedule extends Component {
  state = {
    date: new Date(),
    original_date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  onClickDay(day){
      console.log(day.getMonth(day))
  }

  tileDisabled(tile){
      return false;
  }
 
  render() {
    return (
      <div className="Border">
        <Calendar
            tileDisabled={this.tileDisabled}
            minDate={this.state.original_date}
            onChange={this.onChange}
            onClickDay={this.onClickDay}
            value={this.state.date}
        />
      </div>
    );
  }
}

export default Schedule;