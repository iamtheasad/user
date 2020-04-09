import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="serviceMainTitle text-center">CLIENT SAYS</h2>
                        </Col>
                    </Row>


                    <Slider className="clientReview" {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C5103AQFCoBxyKW4Sjw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=uaf8gaxNXclr1zWhwLbDOKGX2-fSbyono0Ex9n7tRiE"
                                        alt="Client Image" className="circlaImg"/>
                                    <h4 className="serviceName">Web Development</h4>
                                    <p className="serviceDescription">I desing modern user interface and other graphical
                                        components for your business and instiution graphical components for your
                                        business and instiution</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C5103AQFCoBxyKW4Sjw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=uaf8gaxNXclr1zWhwLbDOKGX2-fSbyono0Ex9n7tRiE"
                                        alt="Client Image" className="circlaImg"/>
                                    <h4 className="serviceName">Web Development</h4>
                                    <p className="serviceDescription">I desing modern user interface and other graphical
                                        components for your business and instiution graphical components for your
                                        business and instiution</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C5103AQFCoBxyKW4Sjw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=uaf8gaxNXclr1zWhwLbDOKGX2-fSbyono0Ex9n7tRiE"
                                        alt="Client Image" className="circlaImg"/>
                                    <h4 className="serviceName">Web Development</h4>
                                    <p className="serviceDescription">I desing modern user interface and other graphical
                                        components for your business and instiution graphical components for your
                                        business and instiution</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C5103AQFCoBxyKW4Sjw/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=uaf8gaxNXclr1zWhwLbDOKGX2-fSbyono0Ex9n7tRiE"
                                        alt="Client Image" className="circlaImg"/>
                                    <h4 className="serviceName">Web Development</h4>
                                    <p className="serviceDescription">I desing modern user interface and other graphical
                                        components for your business and instiution graphical components for your
                                        business and instiution</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;