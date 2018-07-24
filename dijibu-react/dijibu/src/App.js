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
      dateId: null,
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

  handleDateChange(newDate, newDateId) {
    this.setState({
      date: newDate,
      dateId: newDateId
    });
  }

  handleTrackerChange(newInfo, trackerId, trackerType, date, defaultInfo) {
    if(defaultInfo) {
      firebase.database().ref(`users/0/dates/${this.state.dateId}/date`).set(date);
      firebase.database().ref(`users/0/dates/${this.state.dateId}/trackers`).set([
      { "name" : "Mood",
        "type" : "pie",
        "options" : ["Happy", "Frustrated", "Moody", "Sad", "Thoughtful"],
        "value" : "Happy"
      },
      { "name" : "Purchase",
        "type" : "wordcloud",
        "options" : [],
        "value" : ["milk", "orange juice", "bread"]
      },
      { "name" : "Activity",
        "type" : "heat",
        "options" : ["", "Sleeping", "Driving", "Cooking", "Exercising", "Watching TV", "Reading", "Shopping", "Working"],
        "value" : ["Sleeping", "Sleeping", "", "Sleeping", "", "", "Sleeping", "Sleeping", "Cooking", "Driving", "Working", "Working", "Working", "Working", "Working", "Working", "", "", "Driving", "Cooking", "Watching TV", "Watching TV", "Exercising", "Reading"]
      },
      { "name" : "Exercise",
        "type" : "boolean",
        "options" : [],
        "value" : true
      },
      { "name" : "Money Spent",
        "type" : "count",
        "options" : [],
        "value" : 33
      }
      ]);
    }
    const trackerRef = firebase.database().ref(`users/0/dates/${this.state.dateId}/trackers/${trackerId}/value`);
    if (trackerType === "boolean") {
      trackerRef.set(newInfo);
    }
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
                date={this.state.date}
                dateId = {this.state.dateId}/>}/>
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
