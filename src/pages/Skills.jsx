import { Code, Database, Cloud, Terminal, Cpu, Layers } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Programming",
        icon: <Code />,
        items: [
            { name: "Python", level: "Advanced" },
            { name: "C", level: "Intermediate" },
            { name: "JavaScript", level: "Intermediate" }
        ]
    },
    {
        category: "Backend",
        icon: <Terminal />,
        items: [
            { name: "FastAPI", level: "Advanced" },
            { name: "Flask", level: "Advanced" },
            { name: "REST APIs", level: "Advanced" }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud />,
        items: [
            { name: "Google Cloud", level: "Advanced" },
            { name: "Docker", level: "Intermediate" },
            { name: "Kubernetes", level: "Intermediate" }
        ]
    },
    {
        category: "Databases",
        icon: <Database />,
        items: [
            { name: "MySQL", level: "Advanced" },
            { name: "PostgreSQL", level: "Intermediate" },
            { name: "MongoDB", level: "Intermediate" }
        ]
    },
    {
        category: "Tools",
        icon: <Layers />,
        items: [
            { name: "Git", level: "Advanced" },
            { name: "Linux", level: "Intermediate" },
            { name: "Postman", level: "Advanced" }
        ]
    },
    {
        category: "Other",
        icon: <Cpu />,
        items: [
            { name: "Camunda BPM", level: "Intermediate" },
            { name: "OpenCV", level: "Intermediate" },
            { name: "PyTorch", level: "Basic" }
        ]
    }
];

const Skills = () => {
    return (
        <div className="skills-page section fade-in">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillsData.map((skillGroup) => (
                        <div className="skill-card" key={skillGroup.category}>
                            <div className="skill-header">
                                <span className="skill-icon">{skillGroup.icon}</span>
                                <h3>{skillGroup.category}</h3>
                            </div>
                            <div className="skill-list">
                                {skillGroup.items.map((item) => (
                                    <div className="skill-item" key={item.name}>
                                        <span className="skill-name">{item.name}</span>
                                        <span className="skill-badge">{item.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
