import React, { Component } from "react";

import { Button, Card, ListGroup, ListGroupItem, Col, Image } from 'react-bootstrap';

import "./contactcard.css";

export default class ContactCard extends Component {

    state = {
        selected: false
    };

    onSelect = (block) => {
        this.setState(({ selected }) => {
            return {
                selected: !selected
            }
        })
    };

    render() {

        const name = this.state.selected ? "elem-marg alert alert-success" : "elem-marg";

        const fb = this.props.social.fb ? "" : "d-none";
        const insta = this.props.social.insta ? "" : "d-none";

        const { id } = this.props;
        return (
            <ListGroupItem onClick={this.onSelect} className={name}>
                <section class="d-flex flex-direction-column">
                    <div class="d-flex align-items-center">
                        <ContactImage name={this.props.name} />
                    </div>
                    <div class="d-flex flex-column marg-5">
                        <HeaderContact name={this.props.name} lastname={this.props.lastname} />
                        <h4><strong> Age: </strong> {this.props.age}</h4>
                        <h4><strong>Telephone:</strong> {this.props.telephone}</h4>
                        <h4><strong>Email:</strong> {this.props.email}</h4>
                        
                        <h4 className={fb}><img class="img-social" src="https://icons-for-free.com/iconfiles/png/512/color+facebook+icon-1320168272811213233.png"></img> {this.props.social.fb}</h4>
                        <h4 className={insta}><img class="img-social" src="https://i.pinimg.com/originals/28/cc/b2/28ccb26da651ad37425371f714d36b5e.png"></img>{this.props.social.insta}</h4>
                    </div>
                    <div class="d-flex justify-content-end">
                    <Controls
                            id={id}
                            onDelete={this.props.onDelete}
                            onFavouriteChange={this.props.onFavouriteChange}
                            favourite={this.props.favourite}
                        />
                    </div>
                </section>

            </ListGroupItem>

            // <Button variant="success">Click me</Button>
        );
    }
}

const HeaderContact = ({ name}, {lastname }) => {
    return <h3><strong> {name} {lastname} </strong></h3>;
};

const ContactImage = ({ name }) => {
    let path = `https://robohash.org/${name}?set=set5`
    let path2 = `https://randomuser.me/api/portraits/thumb/men/75.jpg`

    return (
        <>
            {/* <img className="img-thumbnail" src={path} alt="" /> */}
            <Col xs={2} md={2}>
                <Image className="border border-warning img-20vh align-items-center" src={path} roundedCircle />
            </Col>
        </>
    );
};

class Controls extends Component {
    render() {
        const className =
            this.props.favourite == true ? "fas fa-star" : "far fa-star";
        return (
            <>
                <span className="d-block">
                    <i onClick={this.props.onDelete} className="fas fa-trash"></i>
                </span>
                <span className="d-block">
                    <i onClick={this.props.onFavouriteChange} className={className}></i>
                </span>
                <span className="d-block">
                    <i onClick={this.props.onFavouriteChange} className="fas fa-edit"></i>
                </span>
            </>
        );
    }
}
