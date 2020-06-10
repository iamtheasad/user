import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Follow Me</h4>
                            <a className="socialLink d-block" href="https://www.linkedin.com/in/iamtheasad/"
                               target="_blank">
                                <span className="mr-1"><FontAwesomeIcon icon={faFacebook}/></span> Facebook</a>
                            <a className="socialLink d-block" href="https://www.linkedin.com/in/iamtheasad/"
                               target="_blank"><span className="mr-1"><FontAwesomeIcon icon={faYoutube}/></span> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h4 className="serviceName">Address</h4>
                            <p className="serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side,
                                Rajshahi</p>
                            <p className="serviceDescription"><span className="mr-1"><FontAwesomeIcon
                                icon={faEnvelope}/></span> iamtheasad@gmail.com</p>
                            <p className="serviceDescription"><span className="mr-1"><FontAwesomeIcon
                                icon={faPhone}/></span> +8801673776228</p>
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
                               className=" copyrightLink">asaduzzamanrana.com &copy; 2020 </a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;