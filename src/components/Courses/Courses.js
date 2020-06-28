import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Courses extends Component {

    constructor() {
        super();

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result => {
            this.setState({
                myData: result
            })
        })
    }

    render() {

        const myList = this.state.myData;

        const myView = myList.map(myList => {
            return (
                <Fragment>
                    <Col className="mb-4" lg={3} md={6} sm={12}>
                        <img src={myList.small_img} className="w-100" alt="Course Image"/>
                    </Col>
                    <Col className="mb-4" lg={3} md={6} sm={12}>
                        <h2 className="courseTitle">{myList.short_title}</h2>
                        <p className="courseDes text-justify">{myList.short_des}</p>

                        <Link to="/courseDetails" className="courseDetails">Details</Link>
                    </Col>
                </Fragment>
            )
        })

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="serviceMainTitle text-center">OUR COURSES</h2>
                        </Col>
                    </Row>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;