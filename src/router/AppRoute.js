import React, {Component, Fragment} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
                        <Route exact path={process.env.PUBLIC_URL + '/service'} component={ServicePage}/>
                        <Route exact path={process.env.PUBLIC_URL + '/course'} component={CoursesPage}/>
                        <Route exact path={process.env.PUBLIC_URL + '/portfolio'} component={PortfolioPage}/>
                        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={ContactPage}/>
                        <Route exact path={process.env.PUBLIC_URL + '/about'} component={AboutPage}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default AppRoute;