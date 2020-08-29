import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            desc: '...',
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false
                });
            } else {
                this.setState({
                    data: result,
                    loading: false
                });
            }
        }).catch(error => {
            this.setState({
                error: true,
                loading: false
            });
        });

        RestClient.GetRequest(AppUrl.TechDesc).then(result => {
            if (result == null) {
                this.setState({
                    error: true
                })
            } else {
                this.setState({
                    desc: result[0]['tech_description']
                });
            }
        }).catch(error => {
            this.setState({
                error: true
            })
        })

    }

    render() {
        var blue = "rgba(0,115,230,0.7)";

        if (this.state.loading == true && this.state.error == false) {
            return (<Loader/>);
        } else if (this.state.loading == false && this.state.error == false) {
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={12} className="text-center">
                                <h2 className="serviceMainTitle">Technology Used</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{width: '100%', height: '420px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={420} data={this.state.data}>
                                        <XAxis dataKey="technology"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Bar dataKey="projects" fill={blue}></Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <p className="text-justify des">
                                    {ReactHtmlParser(this.state.desc)}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default Analysis;
