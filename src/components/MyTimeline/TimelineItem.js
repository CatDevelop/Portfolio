import React from 'react';
import s from './Timeline.module.css';
import classNames from "classnames/bind";

function TimelineItem(props) {
    return (
        <div className={classNames(s.timelineItem, props.isRight?s.isRight:"") }>
            <div className={s.timelineItemYear}><p>{props.year}</p></div>
            <p className={s.timelineItemText} dangerouslySetInnerHTML={{__html: props.text}}/>
        </div>
    )
}

export default TimelineItem;
