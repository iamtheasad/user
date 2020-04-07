import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from "./components/Analysis/Analysis";
import Summery from "./components/Summery/Summery";
import RecentProjects from "./components/RecentProjects/RecentProjects";


function App() {
    return (
        <div>
            <TopNavigation />
            <TopBanner />
            <Services />
            <Analysis />
            <Summery />
            <RecentProjects />
        </div>
    );
}

export default App;


