import React from 'react';
import TimelineItem from "./TimelineItem";
import {Timeline} from 'antd'
import s from './Timeline.module.css'

function MyTimeline(props) {
    const items = props.items.map((item, id) => {
        return {
            children: <TimelineItem year={item.year} text={item.text} isRight={false}/>,
            color: item.color ?? "blue",
            style: {fontSize: "16px", fontFamily: "SFPro, serif", fontWeight: '300', lineHeight: "22px"}
        }
    })
    return (
        <div className={s.myTimeline}>
            <Timeline
                //mode="alternate"
                items={items}
            />
        </div>
    )
}

export default MyTimeline;
