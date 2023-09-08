import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import NavBar from "./NavBar/NavBar";

export default function ProfileLayout () {
    return (
        <div>
            <NavBar/>
            <MainContent>
                <Outlet/>
            </MainContent>
            {/*<Footer/>*/}
        </div>
    );
};
