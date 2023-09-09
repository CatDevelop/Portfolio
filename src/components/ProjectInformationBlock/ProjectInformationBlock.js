import React from 'react';
import s from './ProjectInformationBlock.module.css';
import {Link} from "react-router-dom";
import ProjectInformationRow from "../ProjectInformationRow/ProjectInformationRow";

function ProjectInformationBlock(props) {
    return (
        <div className={s.projectInformationBlock}>
            {props.informationBlocks.map((el, i) => {
                return <ProjectInformationRow key={"ProjectInformationBlock"+i} type={el.blockType} title={el.blockTitle} content={el.content} linkText={el.linkText}/>
            }
            )}
        </div>
    )
}

export default ProjectInformationBlock;
