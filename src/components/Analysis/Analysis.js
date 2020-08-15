import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            desc: '...'
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
            this.setState({
                data: result
            })
        });

        RestClient.GetRequest(AppUrl.TechDesc).then(result => {
            this.setState({
                desc: result[0]['tech_description']
            })
        })

    }

    render() {

        var blue = "rgba(0,115,230,0.7)";

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
    }
}

export default Analysis;
