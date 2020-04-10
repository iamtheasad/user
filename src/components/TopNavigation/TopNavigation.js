import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import whiteLogo from '../../asset/image/navLogo.png';
import blueLogo from '../../asset/image/navLogoScroll.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


class TopNavigation extends Component {

    constructor() {
        super();

        this.state = {
            navBarTitle: 'navTitle',
            navVariant: 'dark',
            navHeaderToggle: 'header_toggle',
            navBarLogo: [whiteLogo],
            navBarLogoSize: 'navLogoLarg',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navVariant: 'light',
                navBarLogo: [blueLogo],
                navBarLogoSize: 'navLogoSmall',
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navHeaderToggle: 'header_toggle_scroll',
            })
        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navVariant: 'dark',
                navBarLogo: [whiteLogo],
                navBarLogoSize: 'navLogoLarg',
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}>
                        <img src={this.state.navBarLogo} className={this.state.navBarLogoSize}/>
                        React Developer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className={this.state.navBarItem} href="#features">Home</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#pricing">Services</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#pricing">Courses</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#pricing">Portfolio</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#pricing">Contact</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#pricing">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Fragment>
    )
    }
    }

    export default TopNavigation;