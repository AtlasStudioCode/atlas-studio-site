import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap';
import '../../scss/App.scss';

import NavbarComp from '../../components/NavbarComp/NavbarComp';
import ProjectPage from '../ProjectPage/ProjectPage';
import VideoPage from '../VideoPage/VideoPage';
import ContactPage from '../ContactPage/ContactPage';
import WildfirePage from '../WildfirePage/WildfirePage';
import TribalPage from '../TribalPage/TribalPage';
import ZillowPage from '../../test/ZillowPage/ZillowPage';
import TestPage from '../TestPage/TestPage';

function App() {
    return (
        <div>
            <NavbarComp />
            <Switch>
                <Route path="/projects">
                    <ProjectPage />
                </Route>
                <Route path="/videos">
                    <VideoPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/usa-wildfire-air-quality">
                    <WildfirePage />
                </Route>
                <Route path="/ca-native-american-tribal-boundaries">
                    <TribalPage />
                </Route>
                <Route path="/zillow-home-value-index">
                    <ZillowPage />
                </Route>
                <Route path="/test">
                    <TestPage />
                </Route>
                <Route path="/">
                    <Redirect to='/projects' />
                </Route>
            </Switch>
        </div>
    );
}

export default App;