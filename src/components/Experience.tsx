import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const experiences = [
    {
        role: 'Associate Software Engineer',
        company: 'AstroVed Technologies Pvt. Ltd',
        period: 'May 2026 - Present',
        description: 'Working as an Associate Software Engineer, contributing to the development of robust web applications, optimizing performance, and collaborating with cross-functional teams.',
        tags: ['React', 'Node.js', 'Software Engineering'],
        gradient: 'from-cyan-500 to-blue-500'
    },
    {
        role: 'React Developer Intern',
        company: 'Ailaysa Technologies Pvt Ltd',
        period: 'Feb 2026 - Mar 2026',
        description: 'Worked on scalable MERN applications using React.js and REST APIs. Contributed to UI development, API integration, and maintained clean, efficient code while collaborating with the development team.',
        tags: ['React', 'Tailwind CSS', 'REST API', 'Git', 'Onsite'],
        gradient: 'from-emerald-500 to-teal-500'
    },
    {
        role: 'MERN Stack Developer Intern',
        company: 'Venticinque Aeyon Groupe',
        period: 'Dec 2025 - Feb 2026',
        description: 'Assisted in developing scalable MERN applications at Venticinque Aeyon Groupe. Delivered tasks on time, maintained code quality, and collaborated with the dev team remotely.',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Remote'],
        gradient: 'from-purple-500 to-indigo-500'
    },
];

const Experience: React.FC = () => {
    return (
        <section id="internship" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
            {/* Dynamic Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold mb-6 text-sm tracking-wide border border-indigo-100 dark:border-indigo-800/50">
                        My Career Journey
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 text-gray-900 dark:text-white">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Experience</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-10 relative max-w-4xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-6 md:left-[52px] top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500/20 via-cyan-500/20 to-transparent rounded-full"></div>

                    {experiences.map((exp, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                                className="relative flex items-start pl-16 md:pl-32"
                            >
                                {/* Glowing Dot on the vertical line */}
                                <div className="absolute left-2 md:left-[38px] top-8 flex items-center justify-center">
                                    <div className="absolute w-8 h-8 rounded-full bg-indigo-500/20 animate-ping"></div>
                                    <div className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg shadow-indigo-500/40 border-4 border-white dark:border-slate-950 flex items-center justify-center`}>
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                </div>

                                {/* Premium Card Design */}
                                <div className="group relative w-full rounded-[2rem] bg-white dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-[2px] hover:border-transparent transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">

                                    {/* Animated Border Gradient on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ backgroundImage: `linear-gradient(to right bottom, var(--tw-gradient-stops))` }}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-50`}></div>
                                    </div>

                                    <div className="relative bg-white dark:bg-slate-900 rounded-[1.8rem] p-6 md:p-8 flex flex-col justify-between h-full">

                                        {/* Header */}
                                        <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg shrink-0 mt-1`}>
                                                    <FiBriefcase size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                        {exp.role}
                                                    </h3>
                                                    <h4 className="text-lg font-semibold text-gray-500 dark:text-slate-400">
                                                        {exp.company}
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 text-indigo-600 dark:text-indigo-400 rounded-xl text-sm font-semibold whitespace-nowrap border border-slate-100 dark:border-slate-700">
                                                <FiCalendar />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-8 text-base md:text-lg border-l-4 border-slate-100 dark:border-slate-800 pl-4 group-hover:border-indigo-400 transition-colors duration-300">
                                            {exp.description}
                                        </p>

                                        {/* Footer / Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full shadow-sm group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 group-hover:border-indigo-200 dark:group-hover:border-indigo-800/50 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Subtle Arrow indicator */}
                                        <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-indigo-500">
                                            <FiArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
