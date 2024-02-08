import React, { Component } from 'react';
import Filter from './Fiter'; // Corrected spelling of Filter

export default class WelcomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            YourAge: true,
        };
    }
    render() {
        let Ami;
        if (this.state.YourAge) {
            Ami = "Welcome to our Admin Panel"; // Corrected message
        } else {
            Ami = <Filter />; // Corrected component name
        }
        return (
            <div>
                {Ami}
            </div>
        );
    }
}
