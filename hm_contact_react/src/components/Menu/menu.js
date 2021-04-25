import React, { Component } from "react";

import "./menu.css";

import {Button} from 'react-bootstrap';

export default class Menu extends Component {
    render() {
      return (
        <>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">ADD Contact</a> */}
               
                {/* <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div> */}
              </li>
            </ul>
        </>
      );
    }
  }