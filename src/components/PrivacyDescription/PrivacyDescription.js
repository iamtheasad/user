import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus
                                    expedita, fuga quasi reiciendis repellendus! Architecto culpa eius exercitationem
                                    nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                    accusantium ad assumenda consequatur deserunt dignissimos doloremque ex ipsa laborum
                                    magnam, minima, molestiae nihil nisi odit pariatur quam quibusdam velit
                                    voluptatibus.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;