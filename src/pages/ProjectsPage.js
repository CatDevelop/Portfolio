import React from "react";
import {ProjectPreview} from "../components/ProjectPreview/ProjectPreview";
import styles from "./Pages.module.css"
import {projectOrder, projects} from "../store/data";

export const ProjectsPage = () => {
    return (
        <div>
            <h1 className={styles.projectsTitle}>Мои проекты</h1>
            <div className={styles.projects}>
                {
                    projectOrder.map((projectID, index) => {
                        let project = projects[projectID]
                        return <ProjectPreview key={"projectPreview"+index}
                                               id={project.id}
                                               category={project.category}
                                               name={project.name}
                                               description={project.shortDescription}
                                               image={project.previewImage}
                                               tags={project.tags}
                                               gitURL={project.gitURL}
                                               projectURL={project.projectURL}
                                               isInvert={project.id % 2 === 0}
                        />
                    })
                }
            </div>
        </div>
    )
}
