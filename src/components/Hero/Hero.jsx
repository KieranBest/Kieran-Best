import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <h1 className={styles.title}>Hello there,</h1>
                <h1 className={styles.title}>my name is Kieran</h1>
                <p className={styles.description}>I am a developer learning all things creative</p>
                <p className={styles.description}>Take a look at this website to get to know me better or follow this link for various design concepts</p>
                <a className={styles.contactBtn} href="">Design Ideas</a>
                <p className={styles.description}>If you want to get in touch, feel free here</p>
                <a className={styles.contactBtn} href="mailto:best.kieran.4595@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/Photo.jpg")} alt="Kieran Best" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
