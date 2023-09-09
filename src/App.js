import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProjectsPage} from "./pages/ProjectsPage";
import {WelcomePage} from "./pages/WelcomePage";
import ScrollToTop from "./hoc/ScrollToTop";
import {ProjectPage} from "./pages/ProjectPage";
import Layout from "./components/Layout";
import {BlogPage} from "./pages/BlogPage";

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>

                    <Route path='/' element={<Layout layout={'main'}/>}>
                        <Route index element={<WelcomePage/>}/>
                        <Route path='work/:projectID' element={<ProjectPage/>}/>
                        <Route path='blog' element={<BlogPage/>}/>

                        {/*<Route path='components' element={<ComponentsPage/>}/>*/}
                    </Route>
                    <Route path='/' element={<Layout layout={'width'}/>}>
                        <Route path='works' element={<ProjectsPage/>}/>

                    </Route>
                </Routes>
            </ScrollToTop>
        </Router>);
}

export default App;
