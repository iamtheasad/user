import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicsLogo from '../../asset/image/graphics.svg';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


class Services extends Component {
    constructor(){
        super();

        this.state={
            myData: []
        }
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.Services)
        .then(result=>{
            this.setState({myData:result})
        })
    }


    render() {

        const myList = this.state.myData;
        const myView = myList.map(myList=>{

            return <Col lg={4} md={6} sm={12}>
                    <div className="text-center serviceCard">
                        <img src={myList.service_logo}/>
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDescription">{myList.service_description}</p>
                    </div>
                </Col>
            
        });


        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="serviceMainTitle text-center">My Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services;