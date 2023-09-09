import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import NavBar from "./NavBar/NavBar";
import WidthContent from "./WidthContent/WidthContent";
import ConsoleAndPhoto from "./ConsoleAndPhoto/ConsoleAndPhoto";

const Layout = (props) => {
    const toRotate = ["Frontend developer", "Web Designer", "UI/UX Designer", "Tech Analyst"]

    return (
        <div>
            <NavBar/>
            <ConsoleAndPhoto toRotate={toRotate}/>
            {
                props.layout === 'width' ?
                    <WidthContent>
                        <Outlet/>
                    </WidthContent>

                    :

                    <MainContent>
                        <Outlet/>
                    </MainContent>
            }
            <Footer/>
        </div>
    );
};

export default Layout;
