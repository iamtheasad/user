import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import RecentProjectImage_1 from '../../asset/image/recent-projects/latest_news_1.jpg'
import RecentProjectImage_2 from '../../asset/image/recent-projects/latest_news_2.jpg'
import RecentProjectImage_3 from '../../asset/image/recent-projects/latest_news_3.jpg'
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} >
                            <h2 className="serviceMainTitle">RECENT PROJECTS</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={RecentProjectImage_1} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        <Link  className="lind-style" to="/projectDetails">Details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={RecentProjectImage_2}/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        <Link className="lind-style" to="/projectDetails">Details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={RecentProjectImage_3}/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        <Link className="lind-style" to="/projectDetails">Details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;