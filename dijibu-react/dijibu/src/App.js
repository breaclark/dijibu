import React from 'react';
import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import TrackersMain from './TrackersMain';
import Calendar from './Calendar';
import HistoriesMain from './HistoriesMain';
import EditTrackers from './EditTrackers';
import NewTracker from './NewTracker';
import DeleteTracker from './DeleteTracker';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/signIn' render={()=><SignIn />}/>
          <Route exact path='/' render={()=><TrackersMain date={this.state.date}/>}/>
          <Route path='/calendar' render={()=><Calendar date={this.state.date}/> }/>
          <Route path='/histories' render={()=><HistoriesMain /> }/>
          <Route path='/edit' render={()=><EditTrackers /> }/>
          <Route path='/new' render={()=><NewTracker /> }/>
          <Route path='/delete' render={()=><DeleteTracker /> }/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
