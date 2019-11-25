import React from 'react';

import './App.css';

const years = require('./data.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: [<Year yearDate={2019}/>, <Year yearDate={2018}/>],
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src='CostaRica.jpg' className="App-logo" alt="CostaRica"/>
                    Spektorkovs!
                    <ul>
                    {this.state.years}
                    </ul>
                </header>
            </div>
        );
    }
}

class Year extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: years[this.props.yearDate].events.map((event) => {
                return <Event eventName={event.name}
                              startDate={event.start_date}
                              endDate={event.end_date}
                              photoLink={event.google_photo_link}
                              headerImage={event.header_image}
                />;
            }),
        }
    }
    render() {
        return (
            <div className="year">
                {this.props.yearDate}
                {this.state.events}
            </div>
        );

    }
}

class Event extends React.Component {
    render() {
        return (
            <div className="event">
                {this.props.eventName}
                {this.props.startDate.toDateString()}
                {this.props.endDate.toDateString()}
                <a href={this.props.photoLink}>Link</a>
                <img src={'eventPhotos/' + this.props.headerImage}/>

            </div>
        );
    }
}

export default App;
