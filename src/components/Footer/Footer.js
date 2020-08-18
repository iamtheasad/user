import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Footer extends Component {

    constructor(){
        super();

        this.state = {
            address: '...',
            email: '...',
            phone: '...',
            facebook: '...',
            youtube: '...',
            footer_credit: '...'
        }
    }


    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result => {
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit']
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Follow Me</h4>
                            <a className="socialLink d-block" href={"//"+this.state.facebook}
                                target="_blank">
                                <span className="mr-1"><FontAwesomeIcon icon={faFacebook} /></span> Facebook</a>
                            <a className="socialLink d-block" href={"//"+this.state.youtube}
                                target="_blank"><span className="mr-1"><FontAwesomeIcon icon={faYoutube} /></span> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Address</h4>
                            <p className="serviceDescription"> {this.state.address}</p>
                            <p className="serviceDescription"><span className="mr-1"><FontAwesomeIcon
                                icon={faEnvelope} /></span> {this.state.email}</p>
                            <p className="serviceDescription"><span className="mr-1"><FontAwesomeIcon
                                icon={faPhone} /></span> {this.state.phone}</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Information</h4>

                            <Link to="/about" className="d-block footerLink">About Me</Link>
                            <Link to="/contact" className="d-block footerLink">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Legal</h4>

                            <Link to="/refund" className="d-block footerLink">Refund Policy</Link>
                            <Link to="/terms" className="d-block footerLink">Terms And Condition</Link>
                            <NavLink to="/privacy" className="d-block footerLink"> Privacy Policy</NavLink>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <Row>
                        <Col lg={12}>
                            <a href="https://www.linkedin.com/in/iamtheasad/" target="_blank"
                                className=" copyrightLink">{this.state.footer_credit} </a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;