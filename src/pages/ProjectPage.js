import React from 'react';
import {useParams} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import styles from "./Pages.module.css"
import {Image} from 'antd'
import ProjectInformationBlock from "../components/ProjectInformationBlock/ProjectInformationBlock";
import {NotFoundPage} from "./NotFoundPage";
import ReactPlayer from 'react-player';
import {projects} from "../store/data";

export const ProjectPage = () => {
    const {projectID} = useParams();
    const project = projects.at(parseInt(projectID))


    let breadcrumbs = [
        {id: 1, title: "Проекты", src: "/works"},
        {id: 2, title: project?.name, year: project?.year ?? ""},
    ]

    if (!project)
        return <NotFoundPage/>

    return (
        <div>
            <div className={styles.projectPage}>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
                <div className={styles.projectDescription}>
                    {
                        project.description
                    }
                </div>

                {
                    project.informationBlocks ?
                        <ProjectInformationBlock informationBlocks={project.informationBlocks}/> : <></>
                }


                {
                    project.images ?
                        <Image.PreviewGroup>
                            <h3 className={styles.projectBlockTitle}>Скриншоты</h3>
                            {project.imagePreviews ? project.images.map((image, i) => {
                                    return <div className={styles.projectImage} key={"projectImage" + i}>
                                        <Image width={650} src={image} placeholder={
                                            <Image
                                                preview={false}
                                                src={project.imagePreviews[i]}
                                                width={650}
                                                height={330}
                                            />
                                        }/>
                                    </div>
                                }) :
                                project.images.map((image, i) => {
                                    return <div className={styles.projectImage} key={project.id + "projectImage" + i}>
                                        <Image width={650} src={image}/>
                                    </div>
                                })

                            }
                        </Image.PreviewGroup> : <></>
                }

                {
                    project.video ?
                        <div>
                            <h3 className={styles.projectBlockTitle}>Видео-демонстрация</h3>
                            <div className={styles.projectVideo}>
                                <ReactPlayer
                                    url={project.video}
                                    width="650"
                                    height="360"
                                    controls
                                />
                            </div>
                        </div>
                        : <></>
                }
            </div>
        </div>
    )
}
