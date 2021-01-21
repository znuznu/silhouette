import React from 'react';

import GoTo from 'src/components/common/GoTo/GoTo';

const SKILLS = {
    frontend: [
        { title: 'Angular' },
        { title: 'React' },
        { title: 'yarn' },
        { title: 'npm' },
        { title: 'Webpack' },
        { title: 'TypeScript' },
        { title: 'JavaScript' },
        { title: 'HTML' },
        { title: 'CSS/SCSS' }
    ],
    backend: [
        { title: 'Java' },
        { title: 'Spring Boot 2' },
        { title: 'Hibernate' },
        { title: 'PostgreSQL' },
        { title: 'Python' },
        { title: 'Node.js' }
    ],
    devops: [
        { title: 'Git' },
        { title: 'Maven' },
        { title: 'Docker' },
        { title: 'Gitlab CI/CD' },
        { title: 'Github Actions' },
        { title: 'SonarQube' }
    ]
};

const Skills = () => {
    return (
        <>
            <h1>Skills</h1>
            <ul>
                {SKILLS.frontend.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <ul>
                {SKILLS.backend.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <ul>
                {SKILLS.devops.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <GoTo></GoTo>
        </>
    );
};

export default Skills;
