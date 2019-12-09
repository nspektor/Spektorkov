import React from 'react';

import './App.css';

const years = require('./data.js');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            years: years.map((y) => {return <Year yearDate={y.year_date} randomLink={y.random_photos_link} headerImage={y.random_header_image}/>})
        }
    }
    render() {
        return (
            <div className="App">
                <div className="title"><h1>Spektorkovs</h1></div>
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
        let events_map = years[2019 - this.props.yearDate].events.map((event) => {
            return <Event eventName={event.name}
                          startDate={event.start_date}
                          endDate={event.end_date}
                          photoLink={event.google_photo_link}
                          headerImage={event.header_image}
            />;
        });
        events_map.push(<Random photoLink={years[2019 - this.props.yearDate].random_photos_link} headerImage={years[2019 - this.props.yearDate].random_header_image}/>);
        this.state = {
            events: events_map
        };
    }
    render() {
        return (

            <div className="row">
                <div className="year-date">{this.props.yearDate}</div>
                {this.state.events}
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
            <div className="col-md-3">
                <div className="card mb-3">
                    <img className="card-img-top" src={'eventPhotos/' + this.props.headerImage}/>
                    <div>Random</div>
                    <a href={this.props.photoLink} className="card-link">Photo Album</a>
                </div>
            </div>
        );
    }
}



export default App;
