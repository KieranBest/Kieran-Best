import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, my name is Kieran</h1>
            <p className={styles.description}>I am a full stack web developer</p>
            <a className={styles.contactBtn} href="mailto:best.kieran.4595@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/Photo2.jpg")} alt="Kieran Best" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};
