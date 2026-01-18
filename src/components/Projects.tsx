import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaHeartbeat, FaLaptopCode, FaCalendarCheck, FaGamepad, FaPalette, FaCalculator } from 'react-icons/fa';

const projects = [
    {
        title: 'LifeGuard',
        subtitle: 'Blood Donation Platform',
        description: 'Connects blood donors & recipients efficiently with a focus on accessibility.',
        tags: ['React', 'JS', 'Tailwind'],
        links: { github: 'https://github.com/jagathdev/LifeGuard', demo: '#' },
        gradient: 'from-rose-500 to-red-600',
        icon: <FaHeartbeat size={40} className="text-white/80" />
    },
    {
        title: 'Portfolio',
        subtitle: 'Personal Webpage',
        description: 'Responsive, recruiter-friendly portfolio with modern animations and theming.',
        tags: ['HTML', 'CSS', 'Tailwind'],
        links: { github: 'https://github.com/jagathdev/Portfolio_html', demo: 'https://jagathdev.github.io/Portfolio_html/' },
        gradient: 'from-indigo-500 to-purple-600',
        icon: <FaLaptopCode size={40} className="text-white/80" />
    },
    {
        title: 'Booking System',
        subtitle: 'Appointment System',
        description: 'User-friendly booking system with state management and reusable components.',
        tags: ['React', 'JS', 'HTML', 'CSS'],
        links: { github: 'https://github.com/jagathdev/Booking_System', demo: 'https://booking-system-red-six.vercel.app/' },
        gradient: 'from-blue-500 to-cyan-500',
        icon: <FaCalendarCheck size={40} className="text-white/80" />
    },
    {
        title: 'Snake Game',
        subtitle: 'Responsive Game',
        description: 'Classic Snake Game with smooth controls and responsive design for all devices.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JS'],
        links: { github: 'https://github.com/jagathdev/SnakeGame', demo: 'https://jagathdev.github.io/SnakeGame/' },
        gradient: 'from-emerald-500 to-teal-500',
        icon: <FaGamepad size={40} className="text-white/80" />
    },
    {
        title: 'Color Generator',
        subtitle: 'Color Generator',
        description: 'Generates random colors with instant copy-to-clipboard functionality.',
        tags: ['HTML', 'CSS', 'Tailwind', 'JS'],
        links: { github: 'https://github.com/jagathdev/color_palette', demo: ' https://jagathdev.github.io/color_palette/' },
        gradient: 'from-orange-500 to-pink-500',
        icon: <FaPalette size={40} className="text-white/80" />
    },
    {
        title: 'Calculator',
        subtitle: 'Web Application',
        description: 'Real-time calculator with modern UI and smooth user interaction.',
        tags: ['HTML', 'CSS', 'JS'],
        links: { github: 'https://github.com/jagathdev/Calculator', demo: 'jagathdev.github.io/Calculator/' },
        gradient: 'from-gray-700 to-gray-900',
        icon: <FaCalculator size={40} className="text-white/80" />
    },
];

// Helper for tag colors
const getTagStyles = (tag: string) => {
    switch (tag.toLowerCase()) {
        case 'react':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
        case 'js':
        case 'javascript (es6+)':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
        case 'tailwind':
        case 'tailwind css':
            return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800';
        case 'html':
        case 'html/css':
            return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
        case 'css':
            return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
        case 'bootstrap':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real-world projects showcasing modern web development capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-slate-100 dark:border-gray-800 flex flex-col h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >
                            {/* Image Placeholder with Gradient & Icon */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                {/* Abstract Shapes */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

                                {/* Icon */}
                                <div className="transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                                    {project.icon}
                                </div>

                                {/* Hover Overlay with Buttons */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                                        title="Live Demo"
                                    >
                                        <FiExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-900 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                                        title="View Code"
                                    >
                                        <FiGithub size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-indigo-500 font-medium mb-3">{project.subtitle}</p>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                whileHover={{ scale: 1.1 }}
                                                className={`px-3 py-1 text-xs font-semibold rounded-full border cursor-default ${getTagStyles(tag)}`}
                                            >
                                                {tag}
                                            </motion.span>
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
