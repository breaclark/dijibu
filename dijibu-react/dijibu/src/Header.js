import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div>
        <h1>Dijibu</h1>
        <Link to="/">Trackers</Link> | <Link to="/calendar">Calendar</Link> | <Link to="/edit">Edit Trackers</Link> | <Link to="/histories">Histories</Link> | <Link to="/signIn">SignIn</Link>
      </div>
    );
}

export default Header;
