import React from "react";
import s from './ProjectPreview.module.css';
import {Link, useNavigate} from "react-router-dom";
import classNames from "classnames";

export const ProjectPreview = (props) => {
    const navigate = useNavigate()
    return (
        <div className={classNames(s.projectPreview, props.isInvert ? s.invert : "")}>
            <div className={s.projectContent}>
                <p className={s.projectCategory}>{props.category}</p>
                <p onClick={() => navigate("/work/"+props.id)} className={s.projectName}>{props.name}</p>
                <div className={s.projectDescription}>
                    {props.description}
                    <p onClick={() => navigate("/work/"+props.id)}
                        className={classNames(s.more, props.isInvert ? s.moreInvert : "")}>Подробнее...</p>
                </div>
                <div className={s.projectTags}>
                    {
                        props.tags ?
                            <>
                                {
                                    props.tags.map(tag => {
                                        return <p className={s.projectTag}>{tag}</p>
                                    })
                                }</>

                            : <></>
                    }


                    {
                        props.gitURL ?
                            <Link to={props.gitURL} target="_blank" className={s.githubLogo}>
                                <svg width="20" height="20" viewBox="0 0 25 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1551_6946)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.2135 0C5.45975 0 0 5.5 0 12.3042C0 17.7432 3.49825 22.3472 8.35125 23.9767C8.958 24.0992 9.18025 23.712 9.18025 23.3862C9.18025 23.101 9.16025 22.1232 9.16025 21.1045C5.76275 21.838 5.05525 19.6378 5.05525 19.6378C4.50925 18.2118 3.70025 17.8452 3.70025 17.8452C2.58825 17.0915 3.78125 17.0915 3.78125 17.0915C5.01475 17.173 5.662 18.3545 5.662 18.3545C6.75375 20.2285 8.513 19.699 9.22075 19.373C9.32175 18.5785 9.6455 18.0285 9.98925 17.723C7.2795 17.4377 4.4285 16.3785 4.4285 11.6523C4.4285 10.3078 4.9135 9.20775 5.682 8.35225C5.56075 8.04675 5.136 6.7835 5.8035 5.09275C5.8035 5.09275 6.83475 4.76675 9.16 6.35575C10.1555 6.08642 11.1822 5.9494 12.2135 5.94825C13.2448 5.94825 14.296 6.091 15.2668 6.35575C17.5923 4.76675 18.6235 5.09275 18.6235 5.09275C19.291 6.7835 18.866 8.04675 18.7447 8.35225C19.5335 9.20775 19.9985 10.3078 19.9985 11.6523C19.9985 16.3785 17.1475 17.4172 14.4175 17.723C14.8625 18.11 15.2465 18.8432 15.2465 20.0045C15.2465 21.6545 15.2265 22.9787 15.2265 23.386C15.2265 23.712 15.449 24.0992 16.0555 23.977C20.9085 22.347 24.4067 17.7432 24.4067 12.3042C24.4267 5.5 18.947 0 12.2135 0Z"
                                              fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1551_6946">
                                            <rect width="24.5" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link> : <></>
                    }

                    {
                        props.projectURL ?
                            <Link to={props.projectURL} target="_blank" className={s.linkLogo}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8284 10.1716C12.2663 8.60948 9.73367 8.60948 8.17157 10.1716L4.17157 14.1716C2.60948 15.7337 2.60948 18.2663 4.17157 19.8284C5.73367 21.3905 8.26633 21.3905 9.82843 19.8284L10.93 18.7269M10.1716 13.8284C11.7337 15.3905 14.2663 15.3905 15.8284 13.8284L19.8284 9.82843C21.3905 8.26633 21.3905 5.73367 19.8284 4.17157C18.2663 2.60948 15.7337 2.60948 14.1716 4.17157L13.072 5.27118" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </Link> : <></>
                    }
                </div>

            </div>
            <div className={s.projectImageContainer}>
                <Link to={"/work/"+props.id} target="_self">
                    <div className={s.projectImage} style={{backgroundImage: "url("+props.image+")"}}/>
                    {/*<img className={s.projectImage} src={props.image} alt={"project"}/>*/}
                </Link>
            </div>
        </div>
    )
}
