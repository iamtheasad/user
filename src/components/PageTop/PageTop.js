import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner topPageBanner p-0">
                    <div className="topBannerOverlay topPageBannerOverlay">
                        <div className="topContent topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle topPageTitle">{this.props.pagetitle}</h1>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;