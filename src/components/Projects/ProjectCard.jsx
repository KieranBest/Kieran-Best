import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project : { title, imageSrc, description, skills, source  }
}) => {
    return (
        <a href={source} className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li className={styles.skill} key={id}>{skill}</li>
                    );
                })}
            </ul>
        </a>
    );
};