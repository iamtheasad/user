import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import ReactHtmlParser from 'react-html-parser';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class CourseDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MyCourseID: props.id,
            Longtitle: " ",
            TotalLecture: " ",
            TotalStudent: " ",
            LongDesc: " ",
            SkillAll: " ",
            VideoURL: " ",
            MoreInfoURL: " "
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseDetails + this.state.MyCourseID)
            .then(result => {
                this.setState({
                    Longtitle:result[0]['long_title'],
                    TotalLecture:result[0]['total_lecture'],
                    TotalStudent:result[0]['total_student'],
                    LongDesc:result[0]['long_des'],
                    SkillAll:result[0]['skill_all'],
                    VideoURL:result[0]['video_url'],
                    MoreInfoURL:result[0]['courses_link'],
                })
            }).catch(error => {
                return null;
        });
    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner topPageBanner p-0">
                    <div className="topBannerOverlay topPageBannerOverlay">
                        <Container className="topPageContentCours">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="courseFullTitle">{this.state.Longtitle}</h3>
                                    <h5 className="courseSubTitle">Total Lecture={this.state.TotalLecture}</h5>
                                    <h5 className="courseSubTitle">Total Student={this.state.TotalStudent}</h5>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="courseDesDetails">{this.state.LongDesc}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className="serviceName">Skill You Get</h1>
                            {ReactHtmlParser(this.state.SkillAll)}
                            <Button variant="primary">More Info</Button>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src={this.state.VideoURL}/>
                                <BigPlayButton position="center"/>
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;