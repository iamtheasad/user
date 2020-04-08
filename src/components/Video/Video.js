import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Player, BigPlayButton} from "video-react";
import "video-react/dist/video-react.css";

class Video extends Component {
    constructor(){
        super();

        this.state={
            show: false
        }
    }

    modalClose=()=>this.setState({show: false});
    modalOpen=()=>this.setState({show: true});

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="video_section">
                        <Col lg={12} className="text-center">
                            <h2 className="videoTitle">How I Do</h2>
                            <p className="videoDes">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i
                                start coding. Testing is also going on with coding. Final testing take place after
                                finishing coding part. After successful implementation i provide 6 month free bug fixing  service for corresponding project.</p>
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
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
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