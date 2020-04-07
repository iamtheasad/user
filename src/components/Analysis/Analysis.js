import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


class Analysis extends Component {

    constructor() {
        super();
        this.state = {

            data: [
                {
                    Technology: "Java",
                    Projects: 100,
                },
                {
                    Technology: "Kotlin",
                    Projects: 65,
                },
                {
                    Technology: "Sql",
                    Projects: 55,
                },
                {
                    Technology: "Bootstrap",
                    Projects: 95,
                },
                {
                    Technology: "Jquery",
                    Projects: 100,
                },
                {
                    Technology: "Java",
                    Projects: 95,
                },
                {
                    Technology: "PHP",
                    Projects: 30,
                },
                {
                    Technology: "React",
                    Projects: 100,
                },
                {
                    Technology: "Angular",
                    Projects: 40,
                }
            ]
        }
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
                                    <XAxis dataKey="Technology" />
                                    <YAxis/>
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">To build native android apps i use Java as well as kotline
                                mainly. React JS is used for cross platform mobile application.
                                I use MySQL database for relational database system.
                                To build NoSQL application i use MongoDB. Firebase database
                                system is used where it is necessary to provide realtime data flow facilities.
                                <br/>
                                <br/>
                                I always build dynamic application. Admin panel is the heart of such kinds of
                                application. I always try to provide sufficient features in admin panel to dominate
                                application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build
                                admin panel section.
                                <br/>
                                <br/>
                                Application security is a big deal for commercial application. I always ensure security
                                portion of my application, moreover i build a security alert system, to notify admin
                                when his system at risk.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;