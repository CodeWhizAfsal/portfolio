import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        role: "Backend Developer Intern",
        company: "GAIAN Solutions",
        period: "2024 - Present",
        achievements: [
            "Architected scalable microservices using FastAPI, improving request throughput by 40%.",
            "Optimized database queries in MySQL, reducing latency for critical endpoints.",
            "Collaborated with frontend teams to define robust API contracts."
        ]
    },
    {
        role: "Cloud Lead",
        company: "Google Developer Student Clubs (GDSC)",
        period: "2023 - 2024",
        achievements: [
            "Led a community of 500+ students, conducting 10+ workshops on GCP.",
            "Mentored 5 projects from ideation to deployment on Google Cloud.",
            "Facilitated hands-on labs for Kubernetes and Docker basics."
        ]
    },
    {
        role: "Freelance AI Specialist",
        company: "Outlier & Chegg",
        period: "2023 - Present",
        achievements: [
            "Annotated and refined high-quality datasets for LLM training.",
            "Provided technical documentation and code review for AI-generated content."
        ]
    }
];

const education = [
    {
        degree: "B.Tech in Materials Science",
        school: "IIT Hyderabad",
        period: "2022 - 2026",
        grade: "CGPA: 8.01"
    },
    {
        degree: "High School (CBSE)",
        school: "Placid Vidya Vihar",
        period: "2022",
        grade: "95.4%"
    }
];

const Experience = () => {
    return (
        <div className="experience-page section fade-in">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline-grid">
                    <div className="timeline-section">
                        <h3 className="timeline-header"><Briefcase size={22} /> Professional Experience</h3>
                        <div className="timeline-list">
                            {experiences.map((exp, index) => (
                                <div className="timeline-card" key={index}>
                                    <div className="timeline-date-badge">{exp.period}</div>
                                    <div className="timeline-content">
                                        <h4>{exp.role}</h4>
                                        <h5>{exp.company}</h5>
                                        <ul>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="timeline-section">
                        <h3 className="timeline-header"><GraduationCap size={22} /> Education</h3>
                        <div className="timeline-list">
                            {education.map((edu, index) => (
                                <div className="timeline-card" key={index}>
                                    <div className="timeline-date-badge">{edu.period}</div>
                                    <div className="timeline-content">
                                        <h4>{edu.degree}</h4>
                                        <h5>{edu.school}</h5>
                                        <p className="grade">{edu.grade}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
