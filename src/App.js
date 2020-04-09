import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from "./components/Analysis/Analysis";
import Summery from "./components/Summery/Summery";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/Video";
import ClientReview from "./components/ClientReview/ClientReview";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div>
            <TopNavigation/>
            <TopBanner/>
            <Services/>
            <Analysis/>
            <Summery/>
            <RecentProjects/>
            <Courses/>
            <Video/>
            <ClientReview/>
            <Footer/>
        </div>
    );
}

export default App;


