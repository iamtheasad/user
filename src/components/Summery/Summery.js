import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


class Summery extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summeryBanner summery_section p-0">
                    <div className="summeryOverlay">
                        <Container className="summeryContainer">
                            <Row className="summeryPosition">
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection text-center">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <div>
                                                                <span ref={countUpRef}/>
                                                            </div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">TOTAL PROJECTS</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={500}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <div>
                                                                <span ref={countUpRef}/>
                                                            </div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">TOTAL CLIENTS</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">Card Title</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Requirement Gathering
                                                </p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> System Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Coding Testing</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summery;