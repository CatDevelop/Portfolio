import React from 'react';
import s from './LinkButton.module.css';
import classNames from "classnames/bind";

function LinkButton(props) {
    return (
            <button disabled={props.disabled} onClick={props.click} type="button" className={classNames(s.linkbutton, props.isSecond?s.second:"", props.isHide?s.hide:"")} {...props}>
                <a href={props.link} target="_blank">{props.children}</a>
            </button>
    )
}

export default LinkButton;
