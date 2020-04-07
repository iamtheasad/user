import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="serviceMainTitle text-center">OUR COURSES</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2020/03/12/19/55/northern-gannet-4926108_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <a href="#" className="courseDetails">Details</a>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2020/04/05/09/22/cherry-blossoms-5005234_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <a href="#" className="courseDetails">Details</a>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_960_720.jpg" className="w-100" alt="Course Image"/>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adelectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <a href="#" className="courseDetails">Details</a>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2020/03/24/08/18/sitting-4963159_960_720.jpg" className="w-100" alt="Course Image"/>
                        </Col>
                        <Col  className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <a href="#" className="courseDetails">Details</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;