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
import dateFns from "date-fns";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
      dateId: null,
      date: dateFns.format(dateFns.startOfDay(new Date()), 'MM-DD-YY')
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

  handleTrackerChange(newInfo, trackerId, trackerType, date, defaultInfo) {
    if(defaultInfo) {
      firebase.database().ref(`users/0/dates/${this.state.date}`).set({
        date: String(date),
        trackers: [
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
          "options" : ["N/A", "Sleeping", "Driving", "Cooking", "Exercising", "Watching TV", "Reading", "Shopping", "Working"],
          "value" : ["Sleeping", "Sleeping", "N/A", "Sleeping", "N/A", "N/A", "Sleeping", "Sleeping", "Cooking", "Driving", "Working", "Working", "Working", "Working", "Working", "Working", "N/A", "N/A", "Driving", "Cooking", "Watching TV", "Watching TV", "Exercising", "Reading"]
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
      ]});
    }
    const trackerRef = firebase.database().ref(`users/0/dates/${this.state.date}/trackers/${trackerId}/value`);
    if (trackerType === "boolean" || trackerType === "pie" || trackerType === "count" || trackerType === "heat") {
      trackerRef.set(newInfo);
    } else if (trackerType === "wordcloud") {
      trackerRef.push(newInfo);
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
          <style>{`
            .switch-box {
              margin-top: 160px;
            }
          `}</style>
          <Header />
          <div className="switch-box">
            <Switch>
              <Route exact path='/' render={()=><SignIn />}/>
              <Route exact path='/trackers' render={()=><TrackersMain
                  onTrackerChange = {this.handleTrackerChange}
                  dates={this.state.user.dates}
                  date={this.state.date}/>}/>
                <Route exact path='/calendar' render={()=><Calendar
                  onDateClick={this.handleDateChange}
                  dates={this.state.user.dates}
                  date={this.state.date}/> }/>
                <Route exact path='/histories' render={()=><HistoriesMain
                  dates={this.state.user.dates} /> }/>
              <Route exact path='/edit' render={()=><EditTrackers /> }/>
              <Route exact path='/new' render={()=><NewTracker /> }/>
              <Route exact path='/delete' render={()=><DeleteTracker /> }/>
              <Route component={Error404} />
            </Switch>
          </div>
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
