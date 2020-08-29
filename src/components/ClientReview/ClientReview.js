import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class ClientReview extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result => {
            if (result == null) {
                this.setState({
                    error: true,
                    loading: false
                });
            } else {
                this.setState({
                    myData: result,
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            initialSlide: 0,
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

        if (this.state.loading == true && this.state.error == false) {
            return (<Loader/>);
        } else if (this.state.loading == false && this.state.error == false) {
            const myList = this.state.myData;

            const myView = myList.map(myList => {
                return (
                    <Fragment>
                        <Row className="text-center justify-content-center">
                            <Col lg={8} md={8} sm={12}>
                                <img
                                    src={myList.client_img}
                                    alt="Client Image" className="circlaImg"/>
                                <h4 className="serviceName">{myList.client_title}</h4>
                                <p className="serviceDescription">{myList.client_description}</p>
                            </Col>
                        </Row>
                    </Fragment>
                );
            })

            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={12} className="text-center">
                                <h2 className="serviceMainTitle text-center">CLIENT SAYS</h2>
                            </Col>
                        </Row>


                        <Slider {...settings}>
                            {myView}
                        </Slider>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error == true) {
            return <WentWrong/>
        }
    }
}

export default ClientReview;