import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { SiMeta } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaLaptopCode, FaGlobeAsia } from 'react-icons/fa';

const certificates = [
    {
        title: 'HTML & CSS in Depth',
        issuer: 'Meta',
        date: 'Aug 2025',
        description: 'Advanced styling, layouts, and responsive design techniques.',
        icon: <SiMeta size={24} />,
        accent: 'from-blue-500 to-blue-600',
        textAccent: 'text-blue-600',
        link: '/assets/certificates/HTML_CSS-in-Depth-Meta.pdf'
    },
    {
        title: 'Programming with JavaScript',
        issuer: 'Meta',
        date: 'Sep 2025',
        description: 'Core JS concepts, functions, and interactive web development.',
        icon: <SiMeta size={24} />,
        accent: 'from-yellow-400 to-yellow-500',
        textAccent: 'text-yellow-600',
        link: '/assets/certificates/Programming_in_Javascript-Meta.pdf'
    },
    {
        title: 'Advanced React',
        issuer: 'Meta',
        date: 'Dec 2025',
        description: 'Hooks, context, routing, and advanced component patterns.',
        icon: <SiMeta size={24} />,
        accent: 'from-cyan-400 to-cyan-500',
        textAccent: 'text-cyan-600',
        link: '/assets/certificates/Advanced_React.pdf'
    },
    {
        title: 'FrontEnd Web Development',
        issuer: 'Reliance Skilling Academy',
        date: 'Sep 2025',
        description: 'HTML, CSS, JS, Git/GitHub, and responsive layouts.',
        icon: <FaLaptopCode size={24} />,
        accent: 'from-red-500 to-red-600',
        textAccent: 'text-red-600',
        link: '/assets/certificates/Frontend_web_devloper.pdf'
    },
    {
        title: 'Web Developer using VS Code',
        issuer: 'Visual Studio Code',
        date: 'Oct 2025',
        description: 'Mastering web development workflows with VS Code.',
        icon: <VscVscode size={24} />,
        accent: 'from-blue-600 to-sky-500',
        textAccent: 'text-sky-600',
        link: '/assets/certificates/Microsoft_Web_Development.pdf'
    },
    {
        title: 'Web Design & Development',
        issuer: 'NSDC (Skill India)',
        date: 'Sep 2025',
        description: 'Web design principles certified by Skill India Digital Hub.',
        icon: <FaGlobeAsia size={24} />,
        accent: 'from-orange-500 to-green-500',
        textAccent: 'text-orange-600',
        link: '/assets/certificates/Web_devlopment.pdf'
    },
];

const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-gray-100">
                        My <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Validated skills and professional achievements.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:-translate-y-1"
                        >
                            {/* Top Accent Line */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${cert.accent}`}></div>

                            <div className="p-6 flex flex-col flex-grow relative">
                                {/* Watermark Icon (Faded) */}
                                <div className="absolute top-4 right-4 text-6xl opacity-5 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                    {cert.icon}
                                </div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg bg-gray-50 dark:bg-slate-800 ${cert.textAccent} shadow-inner`}>
                                        {cert.icon}
                                    </div>
                                    <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700">
                                        {cert.date}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                                    <span>{cert.issuer}</span>
                                    <FiCheckCircle className="text-green-500 text-xs" />
                                </div>

                                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                {/* Action Button */}
                                <a
                                    href={cert.link}
                                    className={`
                                        mt-auto w-full py-2.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 
                                        text-slate-600 dark:text-slate-400 text-sm font-semibold 
                                        flex items-center justify-center gap-2
                                        hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400
                                        transition-all duration-300 group-hover:border-solid
                                    `}
                                >
                                    <span>View Credential</span>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
