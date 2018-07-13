import React from 'react';
import NewTracker from './NewTracker';
import DeleteTracker from './DeleteTracker';
import { Link } from 'react-router-dom';

function EditTrackers() {
    return (
      <div className="edit-trackers">
        <style jsx>{`
          .edit-trackers button {
            background-color: #DA6257;
            border-radius: 3px;
            font-size: 13pt;
            margin-left: 20px;
            margin-bottom: 10px;
            width: 70.5%;
          }

          .link {
            color: white;
          }
        `}</style>
        <h1>Edit Trackers</h1>
        <button><Link className="link" to="/new">New Tracker</Link></button>
        <button><Link className="link" to="/delete">Delete Tracker</Link></button>
      </div>
    );
}

export default EditTrackers;
