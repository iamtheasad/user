import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loader from "../Loader/Loader";

class AllProjects extends Component {

    constructor() {
        super();

        this.state = {
            myData: [],
            loading: true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result => {
            this.setState({
                myData: result,
                loading: false
            })
        })
    }

    render() {

        if (this.state.loading == true) {
            return (<Loader/>)
        } else {
            const myList = this.state.myData;
            const myView = myList.map(myList => {
                return (
                    <Col sm={12} md={6} lg={4}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={myList.img_one}/>
                            <Card.Body>
                                <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                                <Card.Text className="projectCardDes">
                                    {myList.short_description}
                                </Card.Text>
                                <Button variant="primary">
                                    <Link className="lind-style"
                                          to={"/projectDetails/" + myList.id + "/" + myList.project_name}>Details</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })

            return (
                <Fragment>
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default AllProjects;