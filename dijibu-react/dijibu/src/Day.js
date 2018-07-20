import React from 'react';

function Day(props) {
    return (
      <div>
        <h1>{props.date}</h1>
      </div>
    );
}

export default Day;


// <Route exact path='/' render={()=><TrackersMain
//     dates={this.state.user.dates}
//     date={this.state.date}/>}/>
