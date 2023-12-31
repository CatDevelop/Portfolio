import React from 'react';
import s from './ProfileInformationRow.module.css';

function ProfileInformationRow(props) {
    return (
        <div className={s.container}>
            <p className={s.title}>{props.title}</p>
            <p className={s.information}>{props.information}</p>
        </div>
    )
}

export default ProfileInformationRow;
