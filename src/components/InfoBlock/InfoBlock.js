import React from 'react';
import s from './InfoBlock.module.css';

function InfoBlock(props) {
    console.log(props.content)
    return (
        <div className={s.infoBlock}>
            <h3 className={s.header}>
                {props.header}
            </h3>
            <div className={s.content} dangerouslySetInnerHTML={{__html: props.content}}/>
        </div>
    )
}

export default InfoBlock;
