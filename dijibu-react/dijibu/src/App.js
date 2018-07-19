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
      date: new Date(),
      dataValues: {
        values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
        labels: ["Happy", "Sad", "Anxious", "Sad", "Productive", "Sad", "Happy"],
        type: 'pie',
        marker: {
          colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
        },
        sort: false,
        textinfo: 'none'
      },
      layoutValues: {
        height: 500,
        width: 600,
        margin: {
          l: 20,
          r: 20,
          b: 20,
          t: 20}
      }
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
          <Route path='/histories' render={()=><HistoriesMain dataValues={this.state.dataValues}
          layoutValues={this.state.layoutValues} /> }/>
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
