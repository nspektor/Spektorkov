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
                    <div className="container">
                    {this.state.years}
                    </div>
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
            <div>{this.props.yearDate}
            <div className="row">
                {this.state.events}
            </div>
            </div>
        );

    }
}

class Event extends React.Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="card mb-3">
                <img className="card-img-top" src={'eventPhotos/' + this.props.headerImage}/>
                <div className={this.props.eventName.length < 25 ? "": "small"}>{this.props.eventName}</div>
                <div className="card-text">{this.props.startDate.toDateString() !== this.props.endDate.toDateString() ? this.props.startDate.toLocaleDateString('default', { month: 'long', day: 'numeric' }) + ' - ' +
                    this.props.endDate.toLocaleDateString('default', { month: 'long', day: 'numeric' }) : this.props.startDate.toLocaleDateString('default', { month: 'long', day: 'numeric' })}</div>
                <a href={this.props.photoLink} className="card-link">Photo Album</a>

            </div>
            </div>
        );
    }
}

class Random extends React.Component {
    render() {
        return (
            <a href={this.props.photoLink}>Random</a>
        )
    }
}

// Style "Spektorkovs"
// Style the years
// Figure out what to do w Random
// Comments

export default App;
