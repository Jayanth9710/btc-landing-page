import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navPage">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="Logo.png" className="logo"></img>
          <span className="brand-name">BT Swap</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto nav-list">
          <Link exact to='/trade' className="navlink">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Trade
              </a>
            </li>
            </Link>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Earn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Win
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                NFT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <img src="Logo-right.png" className="logo-right"></img>
            <span className="balance">$12.13</span>

            <img src="World.svg" className="world"></img>
            <span className="settings">
              <i class="fas fa-cog"></i>
            </span>

            <button className="wallet">CONNECT WALLET</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
