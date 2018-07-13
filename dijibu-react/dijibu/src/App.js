import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import TrackersMain from './TrackersMain';
import Calendar from './Calendar';
import HistoriesMain from './HistoriesMain';
import EditTrackers from './EditTrackers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <TrackersMain />
        <Calendar />
        <HistoriesMain />
        <EditTrackers />
      </div>
    );
  }
}

export default App;
