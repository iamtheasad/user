import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class RefundSection extends Component {

    constructor() {
        super();

        this.state = {
            desc: '...',
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false
                });
            } else {
                this.setState({
                    desc: result[0]['refund'],
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
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col>
                                <ul>
                                    {ReactHtmlParser(this.state.desc)}
                                </ul>
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

export default RefundSection;