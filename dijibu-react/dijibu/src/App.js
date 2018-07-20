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
      dataValues1: {
        values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
        labels: ["Happy", "Sad", "Anxious", "Sad", "Productive", "Sad", "Happy"],
        type: 'pie',
        marker: {
          colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
        },
        sort: false,
        textinfo: 'none'
      },
      layoutValues1: {
        height: 500,
        width: 600,
        margin: {
          l: 20,
          r: 20,
          b: 20,
          t: 20}
      },
      dataValues3: {
        type: "scatterpolar",
        r: [33, 80, 98, 8, 120, 57, 139, 33],
        theta: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        fill: "toself",
        connectgaps: true,
        fillcolor: "rgba(246, 209, 185, 0.5)",
        line: {
          color: "#DA6257"
        }
      },
      layoutValues3: {
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
      },
      dataValues4:{
        values: [4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666],
        labels: ["12","1","2","3","4","5","6","7","8","9","10","11","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],
        type: "pie",
        marker: {
          colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9","#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46",  "#F6D1B9", "#738678", "#092E46", "#F6D1B9", "#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
        },
        sort: false,
        hole: 0.85,
        textinfo: "none"
      },
      layoutValues4: {
        height: 550,
        width: 600,
        margin: {
          l: 20,
          r: 20,
          b: 20,
          t: 20
        },
        showlegend: false
      },
      dataValues5:{
        values: [14.285, 14.285, 14.285, 14.285, 14.285, 14.285, 14.285],
        labels: ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"],
        type: "pie",
        marker: {
          colors: ["#F6D1B9", "#FFFFFF", "#F6D1B9", "#F6D1B9", "#F6D1B9", "#FFFFFF", "#F6D1B9"]
        },
        sort: false,
        hole: 0.85,
        textinfo: "none"
      },
      layoutValues5: {
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
          <Route path='/histories' render={()=><HistoriesMain dataValues1={this.state.dataValues1}
          layoutValues1={this.state.layoutValues1}
          dataValues3={this.state.dataValues3}
          layoutValues3={this.state.layoutValues3}
          dataValues4={this.state.dataValues4}
          layoutValues4={this.state.layoutValues4}
          dataValues5={this.state.dataValues5}
          layoutValues5={this.state.layoutValues5} /> }/>
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
