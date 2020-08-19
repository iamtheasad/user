import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import loading from '../../asset/image/loader.svg';

class Loader extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="LoaderAnimation" src={loading} alt="Loader Animation"/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loader;