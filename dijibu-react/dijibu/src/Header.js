import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
        <style>{`
          .header {
            align-items: center;
            background-color: #F6D1B9;
            display: flex;
            height: 140px;
            justify-content: space-between;
            width: 100%;
            position: fixed;
            z-index: 5;
            top: 0;
          }

          .header h1 {
            color: #092E46;
            font-size: 6vw;
            margin-left: 20px;
          }

          .header .ham-line {
            background-color: #092E46;
            border-radius: 4px;
            margin-right: 20px;
            margin-bottom: 4px;
            height: 8px;
            width: 56px;
          }

          .hamburger {
            height: 50px;
            overflow: hidden;
            position: absolute;
            right: 10px;
            top: 54px;
          }

          @keyframes menu-slide-in {
            0% {
              top: -140px;
            }
            100% {
              top: 110px;
            }
          }

          .hamburger:hover {
            overflow: visible;
            height: 180px;
          }

          .hamburger:hover .menu-back {
            animation: menu-slide-in 1s;
            animation-fill-mode: both;
          }

          .menu-back {
            background-color: #F6D1B9;
            height: 240px;
            left: 0px;
            position: fixed;
            top: -240px;
            width: 100%;
            z-index: 2;
          }

          .menu .link{
            color: #3E3E3E;
            display: block;
            font-size: 20pt;
            text-align: right;
            text-decoration: none;
            margin: 5px;
            margin-right: 30px;
          }
        `}</style>
        <h1>dijibu</h1>
          <div className="hamburger">
            <div className="hamburger-symbol">
              <div className="ham-line">
              </div>
              <div className="ham-line">
              </div>
              <div className="ham-line">
              </div>
            </div>
            <div className="menu-back">
              <div className="menu">
                <Link className="link" to="/">Calendar</Link>
                <Link className="link" to="/edit">Edit Trackers</Link>
                <Link className="link" to="/histories">Histories</Link>
                <Link className="link" to="/signIn">Sign In</Link>
              </div>
            </div>
          </div>
      </div>

    );
}

export default Header;
