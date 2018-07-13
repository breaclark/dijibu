import React from 'react';

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
        `}</style>
        <h1>Edit Trackers</h1>
        <button>New Tracker</button>
        <button>Delete Tracker</button>
      </div>
    );
}

export default EditTrackers;
