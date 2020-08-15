import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class ProjectDetails extends Component {

    constructor(props) {
        super();

        this.state = {
            MyProjectID: props.id,
            img_two: ' ',
            short_description: ' ',
            project_features: ' ',
            live_preview: ' ',
            project_name: ' '
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails + this.state.MyProjectID)
            .then(result => {
                this.setState({
                    img_two:  result[0]['img_two'],
                    short_description: result[0]['short_description'],
                    project_features:  result[0]['project_features'],
                    live_preview: result[0]['live_preview'],
                    project_name: result[0]['project_name']
                })
            }).catch(error => {
                return null;
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="w-100" src={this.state.img_two} alt="Project Details Image"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">{this.state.project_name}</h2>
                            <p className="serviceDescription">{this.state.short_description}</p>
                            { ReactHtmlParser(this.state.project_features) }
                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;