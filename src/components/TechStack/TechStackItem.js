import React from 'react';
import s from './TechStack.module.css';
import {Tooltip} from "antd";

function TechStackItem(props) {
    return (
        <Tooltip placement="bottom" title={props.title} arrow={false}>
            <div className={s.item}>
                <img src={props.logo} alt={props.title}/>
            </div>
        </Tooltip>
    )
}

export default TechStackItem;
