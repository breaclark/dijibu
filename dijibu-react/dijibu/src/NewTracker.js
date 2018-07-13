import React from 'react';
import { Link } from 'react-router-dom';

function NewTracker() {
    return (
    <div>
      <style>{`
        .form {
          display: flex;
          flex-direction: column;
        }

        .form label {
          font-size: 13pt;
          margin-left: 20px;
        }

        .form-input {
          background-color: #F6D1B9;
          border: 1px solid #092E46;
          border-radius: 3px;
          color: #E99259;
          font-size: 13pt;
          height: 26px;
          line-height: 26px;
          margin-bottom: 10px;
          margin-left: 20px;
          padding-left: 6px;
          width: 68%;
        }

        .form-select {
          background-color: #F6D1B9;
          border: 1px solid #092E46;
          color: #E99259;
          font-size: 13pt;
          margin-bottom: 10px;
          margin-left: 20px;
          width: 70%;
        }

        .option-add {
          background-color: #DA6257;
          border-radius: 14px;
          color: white;
          position: absolute;
          top: 278px;
          right: 16%;
          width: 21px;
        }

        .form-submit {
          background-color: #DA6257;
          border-radius: 3px;
          font-size: 13pt;
          margin-left: 20px;
          margin-bottom: 10px;
          width: 70.5%;
        }

        .form-submit a {
          color: white;
        }
      `}</style>
      <div className="page-header">
        <h1>New Tracker</h1>
      </div>
      <div className="form">
        <label>Tracker Type</label>
        <select className="form-select" id="select-box">
          <option className="form-select" value="multiplechoice">Multiple Choice</option>
          <option className="form-select" value="text">Text</option>
          <option className="form-select" value="activity">Activity</option>
          <option className="form-select" value="boolean">Boolean</option>
        </select>
        <input className="form-input" type="text" name="title" placeholder="Tracker Title" />
        <input className="form-input" type="text" name="units" placeholder="Units (only for counter)" />
        <input className="form-input" type="text" name="option" placeholder="Option (for multi-choice and activity)" />
        <button className="option-add">+</button>
        <button className="form-submit"><Link className="link" to="/">Create New Tracker</Link></button>
      </div>
    </div>
    );
}

export default NewTracker;
