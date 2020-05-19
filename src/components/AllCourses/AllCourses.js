import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img
                                src="https://cdn.pixabay.com/photo/2020/03/12/19/55/northern-gannet-4926108_960_720.jpg"
                                className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img
                                src="https://cdn.pixabay.com/photo/2020/04/05/09/22/cherry-blossoms-5005234_960_720.jpg"
                                className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Adelectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2020/03/12/19/55/northern-gannet-4926108_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img
                                src="https://cdn.pixabay.com/photo/2020/03/12/19/55/northern-gannet-4926108_960_720.jpg"
                                className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img
                                src="https://cdn.pixabay.com/photo/2020/04/05/09/22/cherry-blossoms-5005234_960_720.jpg"
                                className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Adelectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <img src="https://cdn.pixabay.com/photo/2020/03/12/19/55/northern-gannet-4926108_960_720.jpg"
                                 className="w-100" alt="Course Image"/>
                        </Col>
                        <Col className="mb-4" lg={3} md={6} sm={12}>
                            <h2 className="courseTitle">Web Development</h2>
                            <p className="courseDes text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. A delectus eaque excepturi harum ipsam pariatur quibusdam totam.</p>

                            <Link to="/courseDetails" className="courseDetails">Details</Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;