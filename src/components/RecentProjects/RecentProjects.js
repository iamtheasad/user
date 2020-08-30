import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class RecentProjects extends Component {

    constructor() {
        super();

        this.state = {
            myData: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Project3).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false
                });
            } else {
                this.setState({
                    myData: result,
                    loading: false
                });
            }
        }).catch(error => {
            this.setState({
                error: true,
                loading: false
            });
        });
    }

    render() {

        if (this.state.loading == true && this.state.error == false) {
            return (<Loader/>);
        } else if (this.state.loading == false && this.state.error == false) {
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
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default RecentProjects;