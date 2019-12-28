import React, { Component } from 'react';
import Calendar from './Calendar';

class Appointment extends Component{
    constructor(props) {
        super(props)
        this.state = {
            appointments: [],
            openings: []
        }
    }

    componentDidMount(){
        this.getAppointments();
        this.getOpenings();
    }

  // Retrieves the list of appointments from the Express app
  getAppointments = () => {
    fetch('/api/getAppointments')
    .then(res => res.json())
    .then(appointments => this.setState({ appointments }))
  }

  getOpenings = () => {
      fetch('/api/getOpenings')
      .then(res => res.json())
      .then(openings => this.setState({ openings }))
  }

    render() {
        return(
            <div>
                <div className="Background">
                    <h> Book an appointment: </h>
                    <div className="Appointment">
                        <div className="Openings"> 
                            <Calendar/>
                        </div>
                    </div>
                    <div className="Pink">
                        <h> For Cancellations:</h>
                        <p> Please contact @fuckyounevercancelbitch </p>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Appointment;