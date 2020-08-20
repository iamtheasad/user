import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";


class TermsDescription extends Component {

    constructor(){
        super();

        this.state = {
            desc: '...',
            loading: true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result => {
            this.setState({
                desc: result[0]['terms'],
                loading: false
            });
        })
    }

    render() {
        if (this.state.loading==true) {
            return (<Loader/>);
        } else {
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        {ReactHtmlParser(this.state.desc)}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default TermsDescription;