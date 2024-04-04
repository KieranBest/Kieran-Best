import react from 'react';
import { motion } from 'framer-motion';

import { getImageUrl } from '../../utils';
import skills from "../../data/skills.json";

export const Skills = () => {
    const slideWidth = 200 / skills.length;
    const skillCopy = JSON.parse(JSON.stringify(skills));
    const skillDuplicate = [...skillCopy, ...skills];
    return (
        <div className="relative w-full overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-200%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 40,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {skillDuplicate.map((skill, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${slideWidth}%` }}>
                        <img
                            src={getImageUrl(skill.image)}
                            alt={skill.name}
                            className="h-8 w-8 sm:h-16 sm:w-16 object-contain opacity-35"
                        />
                    </div>
                ))}
            </motion.div>
        </div>    );
};
