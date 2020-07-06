import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Player, BigPlayButton} from "video-react";
import "video-react/dist/video-react.css";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Video extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            video_description: '',
            video_url: ''
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result => {
            this.setState({
                video_description: result[0]['video_description'],
                video_url: result[0]['video_url']
            })
        })
    }

    modalClose = () => this.setState({show: false});
    modalOpen = () => this.setState({show: true});

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="video_section">
                        <Col lg={12} className="text-center">
                            <h2 className="videoTitle">How I Do</h2>
                            <p className="videoDes">{this.state.video_description}</p>
                            <p>
                                <FontAwesomeIcon icon={faPlayCircle} onClick={this.modalOpen} className="playBtn"/>
                            </p>
                        </Col>
                    </Row>
                </Container>

                {/* Video Modal */}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Player>
                            <source src={this.state.video_url}/>
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="mr-auto" variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;