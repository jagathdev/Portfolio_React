import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaHeartbeat, FaLaptopCode, FaCalendarCheck, FaGamepad, FaPalette, FaCalculator, FaLandmark, FaRobot } from 'react-icons/fa';

const projects = [
    {
        title: 'AI Career Assistant',
        subtitle: 'ATS Resume & Interview Prep',
        description: 'AI-powered platform that analyzes job URLs to generate ATS-friendly resumes and tailored interview preparation materials.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Mongo DB', 'AI'],
        links: { github: 'https://github.com/jagathdev/AI_Job_Apply_Portal', demo: 'https://ai-job-apply-portal.vercel.app/' },
        gradient: 'from-emerald-500 to-teal-700',
        icon: <FaRobot size={40} className="text-white/90" />
    },
    {
        title: 'MLA Portal',
        subtitle: 'Sholinghur Constituency',
        description: 'Digital portal for citizens to register complaints, track issues, and connect with the MLA office.',
        tags: ['React', 'JS', 'Tailwind', 'Express', 'Node.js', 'MongoDB'],
        links: { github: 'https://github.com/jagathdev/MLA_Portal', demo: 'https://mla-portal-dusky.vercel.app/' },
        gradient: 'from-indigo-600 to-purple-800',
        icon: <FaLandmark size={40} className="text-white/90" />
    },
    {
        title: 'LifeGuard',
        subtitle: 'Blood Donation Platform',
        description: 'Connects blood donors & recipients efficiently with a focus on accessibility.',
        tags: ['React', 'JS', 'Tailwind'],
        links: { github: 'https://github.com/jagathdev/LifeGuard', demo: '#' },
        gradient: 'from-rose-500 to-red-600',
        icon: <FaHeartbeat size={40} className="text-white/90" />
    },
    {
        title: 'Portfolio',
        subtitle: 'Personal Webpage',
        description: 'Responsive, recruiter-friendly portfolio with modern animations and theming.',
        tags: ['HTML', 'CSS', 'Tailwind'],
        links: { github: 'https://github.com/jagathdev/Portfolio_html', demo: 'https://jagathdev.github.io/Portfolio_html/' },
        gradient: 'from-indigo-500 to-cyan-600',
        icon: <FaLaptopCode size={40} className="text-white/90" />
    },
    {
        title: 'Booking System',
        subtitle: 'Appointment System',
        description: 'User-friendly booking system with state management and reusable components.',
        tags: ['React', 'JS', 'HTML', 'CSS'],
        links: { github: 'https://github.com/jagathdev/Booking_System', demo: 'https://booking-system-red-six.vercel.app/' },
        gradient: 'from-blue-500 to-cyan-500',
        icon: <FaCalendarCheck size={40} className="text-white/90" />
    },
    {
        title: 'Snake Game',
        subtitle: 'Responsive Game',
        description: 'Classic Snake Game with smooth controls and responsive design for all devices.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JS'],
        links: { github: 'https://github.com/jagathdev/SnakeGame', demo: 'https://jagathdev.github.io/SnakeGame/' },
        gradient: 'from-emerald-500 to-green-600',
        icon: <FaGamepad size={40} className="text-white/90" />
    },
    {
        title: 'Color Generator',
        subtitle: 'Color Generator',
        description: 'Generates random colors with instant copy-to-clipboard functionality.',
        tags: ['HTML', 'CSS', 'Tailwind', 'JS'],
        links: { github: 'https://github.com/jagathdev/color_palette', demo: ' https://jagathdev.github.io/color_palette/' },
        gradient: 'from-orange-500 to-pink-500',
        icon: <FaPalette size={40} className="text-white/90" />
    },
    {
        title: 'Calculator',
        subtitle: 'Web Application',
        description: 'Real-time calculator with modern UI and smooth user interaction.',
        tags: ['HTML', 'CSS', 'JS'],
        links: { github: 'https://github.com/jagathdev/Calculator', demo: 'jagathdev.github.io/Calculator/' },
        gradient: 'from-slate-700 to-slate-900',
        icon: <FaCalculator size={40} className="text-white/90" />
    },
];

// Helper for premium tag styles
const getTagStyles = (tag: string) => {
    switch (tag.toLowerCase()) {
        case 'react':
            return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
        case 'typescript':
        case 'js':
        case 'javascript (es6+)':
            return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
        case 'tailwind':
        case 'tailwind css':
            return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
        case 'node.js':
        case 'express':
        case 'mongodb':
        case 'mongo db':
            return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
        case 'ai':
            return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
        case 'html':
        case 'html/css':
            return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
        case 'css':
            return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
        case 'bootstrap':
            return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
        default:
            return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
    }
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A selection of my recent work, showcasing full-stack capabilities, modern design patterns, and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-800/50 hover:border-indigo-500/30 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
                        >
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            {/* Image Placeholder with Gradient & Icon */}
                            <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden z-10`}>
                                {/* Glass Overlay shapes */}
                                <div className="absolute top-[-50%] right-[-20%] w-48 h-48 bg-white/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute bottom-[-50%] left-[-20%] w-48 h-48 bg-black/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Icon */}
                                <div className="transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                                    {project.icon}
                                </div>

                                {/* Hover Overlay with Buttons */}
                                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-white text-gray-900 rounded-full shadow-xl hover:scale-110 hover:bg-indigo-50 active:scale-95 transition-all transform translate-y-4 group-hover:translate-y-0"
                                        title="Live Demo"
                                    >
                                        <FiExternalLink size={22} />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-gray-900 text-white border border-gray-700 rounded-full shadow-xl hover:scale-110 hover:bg-black active:scale-95 transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                                        title="View Code"
                                    >
                                        <FiGithub size={22} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-4 tracking-wide">
                                    {project.subtitle}
                                </p>

                                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border backdrop-blur-sm transition-colors ${getTagStyles(tag)}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
