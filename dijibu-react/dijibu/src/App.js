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
      histories: [
        { type: "pie",
          name: "Mood",
          dataValues: [{
            values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
            labels: ["Happy", "Sad", "Anxious", "Sad", "Productive", "Sad", "Happy"],
            type: 'pie',
            marker: {
              colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
            },
            sort: false,
            textinfo: 'none'
          }],
          layout: {
            height: 500,
            width: 600,
            margin: {
              l: 20,
              r: 20,
              b: 20,
              t: 20}
          }
        },{ type: "wordcloud",
          name: "Purchase",
          dataValues: [
          { text: "word", value: 25 },
          { text: "quick", value: 43 },
          { text: "brown", value: 42 },
          { text: "fox", value: 13 },
          { text: "jumped", value: 16 },
          { text: "over", value: 14 },
          { text: "the", value: 28 },
          { text: "lazy", value: 33 }]
        },{ type: "heat",
          name: "Activity",
          dataValues: [{
            values: [4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666],
            labels: ["12","1","2","3","4","5","6","7","8","9","10","11","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],
            type: "pie",
            marker: {
              colors: ["#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9","#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46",  "#F6D1B9", "#738678", "#092E46", "#F6D1B9", "#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9", "#F6D1B9"]
            },
            sort: false,
            hole: 0.65,
            textinfo: "none"
          }, {
            values: [4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666],
            labels: ["12","1","2","3","4","5","6","7","8","9","10","11","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],
            type: "pie",
            marker: {
              colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9","#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46",  "#F6D1B9", "#738678", "#092E46", "#F6D1B9", "#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
            },
            sort: false,
            hole: 0.85,
            textinfo: "none"
          }],
          layout: {
            height: 550,
            width: 600,
            margin: {
              l: 20,
              r: 20,
              b: 20,
              t: 20
            },
            showlegend: false
          }
        },{ type: "boolean",
          name: "Exercise",
          dataValues: [{
            values: [14.285, 14.285, 14.285, 14.285, 14.285, 14.285, 14.285],
            labels: ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"],
            type: "pie",
            marker: {
              colors: ["#F6D1B9", "#FFFFFF", "#F6D1B9", "#F6D1B9", "#F6D1B9", "#FFFFFF", "#F6D1B9"]
            },
            sort: false,
            hole: 0.85,
            textinfo: "none"
          }],
          layout: {
            height: 550,
            width: 600,
            margin: {
              l: 20,
              r: 20,
              b: 20,
              t: 20
            },
            showlegend: false
          }
        },{ type: "count",
          name: "Money Spent",
          dataValues: [{
            type: "scatterpolar",
            r: [33, 80, 98, 8, 120, 57, 139, 33],
            theta: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            fill: "toself",
            connectgaps: true,
            fillcolor: "rgba(246, 209, 185, 0.5)",
            line: {
              color: "#DA6257"
            }
          }],
          layout: {
            polar: {
              radialaxis: {
                color: "#DA6257",
                visible: true,
                angle: 90,
                linecolor: "#D7D7D7",
                gridcolor: "#D7D7D7",
                nticks: 3,
                tickangle: 90
              },
              angularaxis: {
                color: "#D7D7D7",
                direction: "clockwise"
              }
            },
            height: 550,
            width: 520,
            margin: {
              l: 60,
              r: 40,
              b: 20,
              t: 20
            },
            showlegend: false
          }
        }]
    };
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

// Once data is in firebase, will need to translate into charts here
// Might actually do that at the histories main level (so it would take into account new info if necessary)
// Will also need to add in basic trackers without values when someone signs up (later)


  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/signIn' render={()=><SignIn />}/>
            <Route exact path='/' render={()=><TrackersMain
                dates={this.state.user.dates}
                date={this.state.date}/>}/>
            <Route path='/calendar' render={()=><Calendar
                date={this.state.date}/> }/>
            <Route path='/histories' render={()=><HistoriesMain
                dates={this.state.user.dates}
                histories={this.state.histories} /> }/>
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
