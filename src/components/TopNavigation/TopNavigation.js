import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import whiteLogo from '../../asset/image/navLogo.png';
import blueLogo from '../../asset/image/navLogoScroll.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navBarTitle: 'navTitle',
            navVariant: 'dark',
            navHeaderToggle: 'header_toggle',
            navBarLogo: [whiteLogo],
            navBarLogoSize: 'navLogoLarg',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            pageTitle: props.title,
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
                <title>{this.state.pageTitle}</title>

                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg"
                        variant={this.state.navVariant}>
                    <Navbar.Brand>
                        <NavLink to={process.env.PUBLIC_URL + '/'} className={this.state.navBarTitle}>
                            <img src={this.state.navBarLogo} className={this.state.navBarLogoSize}/>
                            React Developer
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/">Home</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/service">Services</NavLink>
                            </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/course">Courses</NavLink>
                            </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/portfolio">Portfolio</NavLink>
                            </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/contact">Contact</NavLink>
                            </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/about">About</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation;