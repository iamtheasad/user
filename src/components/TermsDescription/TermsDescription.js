import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class TermsDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <ul>
                                <li>First 30 Days Money Back! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus aperiam, architecto corporis earum hic id illum, impedit iste, itaque
                                    obcaecati porro quae qui quis quo quos recusandae voluptate. Obcaecati, quisquam?
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsDescription;