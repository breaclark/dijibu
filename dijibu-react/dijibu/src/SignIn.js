import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
      <div className="sign-in">
      <style>{`
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

        .form-submit {
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
      `}
      </style>
        <h1>Sign In</h1>
        <div className="form">
          <input className="form-input" type="text" name="username" placeholder="Username" />
          <input className="form-input" type="text" name="password" placeholder="Password" />
          <button className="form-submit"><Link className="link" to="/">Sign Me In</Link></button>
        </div>
      </div>
    );
}

export default SignIn;
