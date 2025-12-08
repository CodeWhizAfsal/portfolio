import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <section className="hero-section container">
                <div className="hero-content">
                    <div className="hero-intro">Hi, I'm Afsal <span className="wave">👋</span></div>
                    <h1 className="hero-title">
                        Architecting <span className="text-gradient">Scalable Cloud Systems</span> & Robust APIs
                    </h1>
                    <p className="hero-tagline">
                        I transform complex backend challenges into efficient, cloud-native solutions.
                    </p>
                    <p className="hero-subtext">
                        Specializing in Python, FastAPI, and Kubernetes to build high-performance infrastructure for modern web applications.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Let's Connect
                        </Link>
                    </div>
                </div>

                <div className="hero-visual floating">
                    <div className="code-block-wrapper">
                        <div className="code-header">
                            <div className="code-controls">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="code-filename">backend_core.py</div>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="keyword">import</span> <span className="module">asyncio</span>
                                    <span className="keyword">from</span> <span className="module">fastapi</span> <span className="keyword">import</span> FastAPI

                                    <span className="class-name">app</span> = FastAPI()

                                    <span className="decorator">@app.get</span>(<span className="string">"/scale"</span>)
                                    <span className="keyword">async def</span> <span className="function">scale_infrastructure</span>():
                                    <span className="keyword">await</span> <span className="function">deploy_nodes</span>(
                                    count=<span className="number">100</span>,
                                    region=<span className="string">"us-central1"</span>
                                    )
                                    <span className="keyword">return</span> {'{'}<span className="string">"status"</span>: <span className="string">"optimized"</span>{'}'}
                                </code>
                            </pre>
                        </div>
                        <div className="visual-decoration circle-1"></div>
                        <div className="visual-decoration circle-2"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
