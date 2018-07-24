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
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
      date: new Date(),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTrackerChange = this.handleTrackerChange.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const ref = firebase.database().ref('users');
    let userData;
    ref.once("value")
      .then((snapshot) => {
        userData = JSON.parse(JSON.stringify(snapshot.child("0").val()));
        this.setState({
          user: userData
        });
      });
  }

  handleDateChange(newDate) {
    this.setState({
      date: newDate
    });
  }

  handleTrackerChange(newInfo, trackerId, trackerType, datekey) {
    console.log(newInfo);
    const trackerRef = firebase.database().ref('users/0/dates/${dateKey}/trackers/trackerId');
    if (trackerType === "boolean") {
      trackerRef.set({
        value: newInfo
      });
    }
    this.componentDidMount();
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/signIn' render={()=><SignIn />}/>
            <Route exact path='/trackers' render={()=><TrackersMain
                onTrackerChange = {this.handleTrackerChange}
                dates={this.state.user.dates}
                date={this.state.date}/>}/>
            <Route path='/' render={()=><Calendar
                onDateClick={this.handleDateChange}
                dates={this.state.user.dates}
                date={this.state.date}/> }/>
            <Route path='/histories' render={()=><HistoriesMain
                dates={this.state.user.dates} /> }/>
            <Route path='/edit' render={()=><EditTrackers /> }/>
            <Route path='/new' render={()=><NewTracker /> }/>
            <Route path='/delete' render={()=><DeleteTracker /> }/>
            <Route component={Error404} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
        </div>
      );
    }


  }
}

export default App;
