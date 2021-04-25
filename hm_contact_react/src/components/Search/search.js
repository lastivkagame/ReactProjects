import React, { Component } from "react";

import "./search.css";

//import {Button} from 'react-bootstrap';

export default class SearchContact extends Component {
    render() {
        
        return (
            <>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </>
        );
    }
}