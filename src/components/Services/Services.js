import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicsLogo from '../../asset/image/graphics.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="serviceMainTitle text-center">My Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="text-center serviceCard">
                                <img src={webLogo}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as
                                    per your requirements as we
                                    believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="text-center serviceCard">
                                <img src={mobileLogo}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your
                                    business and instiution as per
                                    as your requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="text-center serviceCard">
                                <img src={graphicsLogo}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">I desing modern user interface and other graphical
                                    components for your business and
                                    instiution. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services;