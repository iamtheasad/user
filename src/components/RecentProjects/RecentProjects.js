import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class RecentProjects extends Component {

    constructor() {
        super();

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Project3).then(result => {
            this.setState({
                myData: result
            })
        })
    }

    render() {

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
                                <Link className="lind-style" to={"/projectDetails/"+myList.id+"/"+myList.project_name}>Details</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12}>
                            <h2 className="serviceMainTitle">RECENT PROJECTS</h2>
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

export default RecentProjects;