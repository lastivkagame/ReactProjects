import React, { Component } from "react";

import Menu from "../Menu";
import SearchContact from "../Search";

import "./header.css";

//import {Button} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        
      return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <Menu></Menu>
            <SearchContact></SearchContact>
          </div>
        </div>
      </nav>
        </>
      );
    }
  }