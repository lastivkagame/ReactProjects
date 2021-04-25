import React, { Component } from "react";

import "./contactstatistics.css";

import { Card } from 'react-bootstrap';

export default class ContactStatistics extends Component {
    render() {
        //   const className =
        //     this.props.favourite == true ? "fas fa-star" : "far fa-star";
       
        return (
            <>
                <Card className="list-marg">
                    <Card.Body>
                        <Card.Text>Statistics</Card.Text>
                        <Card.Text>Count of contacts: {this.props.countofcontacts}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}