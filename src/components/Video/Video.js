import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Player, BigPlayButton} from "video-react";
import "video-react/dist/video-react.css";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class Video extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            video_description: '',
            video_url: '',
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false
                });
            } else {
                this.setState({
                    video_description: result[0]['video_description'],
                    video_url: result[0]['video_url'],
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

    modalClose = () => this.setState({show: false});
    modalOpen = () => this.setState({show: true});

    render() {

        if (this.state.loading == true && this.state.error == false) {
            return (<Loader/>);
        } else if (this.state.loading == false && this.state.error == false) {
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
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default Video;