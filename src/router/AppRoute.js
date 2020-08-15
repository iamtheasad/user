import React, {Component, Fragment} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact  path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
                    <Route path="/service" component={ServicePage}/>
                    <Route path="/course" component={CoursesPage}/>
                    <Route path="/portfolio" component={PortfolioPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/refund" component={RefundPage}/>
                    <Route path="/terms" component={TermsPage}/>
                    <Route path="/privacy" component={PrivacyPage}/>
                    <Route path="/projectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route path="/courseDetails" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;