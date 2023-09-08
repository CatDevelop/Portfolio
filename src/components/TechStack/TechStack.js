import React from 'react';
import s from './TechStack.module.css';
import ReactLogo from "../../assets/img/ReactLogo.svg"
import JSLogo from "../../assets/img/JSlogo.svg"
import PHPLogo from "../../assets/img/PHPlogo.svg"
import PythonLogo from "../../assets/img/PythonLogo.svg"
import CLogo from "../../assets/img/Clogo.svg"
import CSSLogo from "../../assets/img/CSSlogo.svg"
import HTMLLogo from "../../assets/img/HTMLlogo.svg"
import SQLLogo from "../../assets/img/SQLlogo.svg"
import {Tooltip} from "antd";
import TechStackItem from "./TechStackItem";

function TechStack(props) {
    return (
        <div className={s.techStack}>
            <p className={s.title}>Мой стек</p>
            <div className={s.divider}/>
            <div className={s.items}>
                <TechStackItem title="React" logo={ReactLogo}/>
                <TechStackItem title="JavaScript" logo={JSLogo}/>
                <TechStackItem title="HTML" logo={HTMLLogo}/>
                <TechStackItem title="CSS" logo={CSSLogo}/>
                <TechStackItem title="PHP" logo={PHPLogo}/>
                <TechStackItem title="MySQL" logo={SQLLogo}/>
                <TechStackItem title="Python" logo={PythonLogo}/>
                <TechStackItem title="C#" logo={CLogo}/>
            </div>

        </div>
    )
}

export default TechStack;
