import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.pictureList}>
                    <li className={styles.aboutImage}>
                        <img src={getImageUrl("about/dog1.jpg")} alt="dog1" />
                    </li>
                    <li className={styles.aboutImage}>
                        <img src={getImageUrl("about/dog2.jpg")} alt="dog2" />
                    </li>
                </ul>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Developer</h3>
                            <p>I love developing new concepts with various languages.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Dog lover</h3>
                            <p>I have 2 crazy dogs that never seem to tire out.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Gamer</h3>
                            <p>When I have a spare evening and fancy a change of pace, I love to game, anything from exploring the universe in 'Starfield', to building my own business empire in 'Big Ambitions'.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};