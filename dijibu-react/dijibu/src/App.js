import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import TrackersMain from './TrackersMain';
import Calendar from './Calendar';
import HistoriesMain from './HistoriesMain';
import EditTrackers from './EditTrackers';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/signIn' render={()=><SignIn />}/>
          <Route exact path='/' render={()=><TrackersMain />}/>
          <Route path='/calendar' render={()=><Calendar /> }/>
          <Route path='/histories' render={()=><HistoriesMain /> }/>
          <Route path='/edit' render={()=><EditTrackers /> }/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
