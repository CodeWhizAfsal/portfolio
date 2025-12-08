import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import projectGithub from '../assets/project-github.png';
import projectBuzz from '../assets/project-buzz.png';
import projectSlam from '../assets/project-slam.png';
import './Projects.css';

const projects = [
    {
        title: "GitHub Insight Service",
        description: "A comprehensive developer analytics platform that scrapes GitHub profiles to generate insightful skill summaries.",
        impact: "Automated profile analysis using LLMs, saving recruiters 80% of evaluation time.",
        tags: ["Python", "Flask", "LLM API", "Web Scraping"],
        image: projectGithub,
        links: { view: "https://github.com/CodeWhizAfsal/github_insight_service", github: "https://github.com/CodeWhizAfsal/github_insight_service" }
    },
    {
        title: "Buzz Chat",
        description: "Real-time communication suite featuring instant messaging, persistent history, and secure authentication.",
        impact: "Supported 100+ concurrent connections with <50ms latency using Socket.io.",
        tags: ["MERN Stack", "Socket.io", "MongoDB", "OAuth"],
        image: projectBuzz,
        links: { view: "https://github.com/CodeWhizAfsal/buzz", github: "https://github.com/CodeWhizAfsal/buzz" }
    },
    {
        title: "Monocular Visual SLAM",
        description: "Robotics perception system implementing Simultaneous Localization and Mapping from a specific camera feed.",
        impact: "Achieved precise state estimation and feature tracking in real-time environments.",
        tags: ["Python", "OpenCV", "ORB-SLAM3", "Robotics"],
        image: projectSlam,
        links: { view: "https://github.com/CodeWhizAfsal/Internship_Assignment", github: "https://github.com/CodeWhizAfsal/Internship_Assignment" }
    }
];

const Projects = () => {
    return (
        <div className="projects-page section fade-in">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="overlay"></div>
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <div className="project-links-mini">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View Code">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.links.view} target="_blank" rel="noopener noreferrer" title="View Project">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-impact">
                                    <strong>Impact:</strong> {project.impact}
                                </div>

                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>

                                <div className="project-actions">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                        <Github size={18} style={{ marginRight: '8px' }} /> View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
