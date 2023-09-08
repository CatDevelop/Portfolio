import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProjectsPage} from "./pages/ProjectsPage";
import {WelcomePage} from "./pages/WelcomePage";
import ProfileLayout from "./components/ProfileLayout";
import ScrollToTop from "./hoc/ScrollToTop";
import {ProjectPage} from "./pages/ProjectPage";
import HomeLayout from "./components/HomeLayout";

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>

                    <Route path='/' element={<ProfileLayout/>}>
                        <Route index element={<WelcomePage/>}/>
                        <Route path='work/:projectID' element={<ProjectPage/>}/>

                        {/*<Route path='components' element={<ComponentsPage/>}/>*/}
                    </Route>
                    <Route path='/' element={<HomeLayout/>}>
                        <Route path='works' element={<ProjectsPage/>}/>

                    </Route>
                </Routes>
            </ScrollToTop>
        </Router>);
}

export default App;
