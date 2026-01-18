import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const experiences = [
    {
        role: 'MERN Stack Developer Intern',
        company: 'Venticinque Aeyon Groupe',
        period: 'Dec 2025 - Mar 2026',
        description: 'Assisted in developing scalable MERN applications at Venticinque Aeyon Groupe. Delivered tasks on time, maintained code quality, and collaborated with the dev team remotely.',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Remote'],
    },
];

const Internship: React.FC = () => {
    return (
        <section id="internship" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                        Internship <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey and industry experience.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-10 md:pl-16 pb-12 border-l-2 border-indigo-200 dark:border-indigo-900/50 last:pb-0"
                        >
                            {/* Animated Timeline Dot */}
                            <div className="absolute left-[-11px] top-0">
                                <span className="absolute inline-flex h-6 w-6 rounded-full bg-indigo-500 opacity-20 animate-ping"></span>
                                <span className="relative inline-flex h-6 w-6 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900"></span>
                            </div>

                            {/* Card Container */}
                            <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700/50 overflow-hidden">

                                {/* Hover Gradient Overlay */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-indigo-500 to-purple-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-indigo-600 group-hover:h-full h-0 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mt-1">
                                                {exp.company}
                                            </h4>
                                        </div>

                                        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium whitespace-nowrap">
                                            <FiCalendar />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed border-l-4 border-indigo-100 dark:border-slate-700 pl-4 mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 pl-4">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 group-hover:border-indigo-100 dark:group-hover:border-indigo-800 transition-all duration-300"
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

export default Internship;
