import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaBootstrap, FaRocket, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiJavascript, SiExpress, SiNextdotjs, SiMongodb, SiCanva } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
    {
        title: "Core Tech Stack",
        description: "Technologies I build with.",
        skills: [
            { name: 'HTML5', icon: <FaHtml5 size={32} className="text-[#E34F26]" /> },
            { name: 'CSS3', icon: <FaCss3Alt size={32} className="text-[#1572B6]" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-[#06B6D4]" /> },
            { name: 'Bootstrap', icon: <FaBootstrap size={32} className="text-[#7952B3]" /> },
            { name: 'JavaScript (ES6+)', icon: <SiJavascript size={32} className="text-[#F7DF1E]" /> },
            { name: 'React', icon: <FaReact size={32} className="text-[#61DAFB]" />, highlight: true },
            { name: 'Node.js', icon: <FaNodeJs size={32} className="text-[#339933]" /> },
            { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-500 dark:text-gray-300" /> },
            { name: 'MongoDB', icon: <SiMongodb size={32} className="text-[#47A248]" /> },
        ]
    },
    {
        title: "Tools & Workflow",
        description: "Essential tools for development.",
        skills: [
            { name: 'Git', icon: <FaGitAlt size={32} className="text-[#F05032]" /> },
            { name: 'GitHub', icon: <FaGithub size={32} className="text-[#181717] dark:text-white" /> },
            { name: 'VS Code', icon: <VscVscode size={32} className="text-[#007ACC]" /> },
            { name: 'Antigravity', icon: <FaRocket size={32} className="text-indigo-500" /> },
            { name: 'Canva', icon: <SiCanva size={32} className="text-[#00C4CC]" /> },
        ]
    },
    {
        title: "Learning & Basics",
        description: "Focus areas for growth.",
        skills: [
            { name: 'TypeScript', icon: <SiTypescript size={32} className="text-[#3178C6]" />, level: 'Basics' },
            { name: 'Next.js', icon: <SiNextdotjs size={32} className="text-black dark:text-white" />, level: 'Basics' },
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-gray-900 dark:text-white">
                        My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
                    </h2>
                    <p className="text-gray-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
                        Technical toolkit & technologies.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                                className="mb-5 border-l-4 border-indigo-500 pl-4"
                            >
                                <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                                    {category.description}
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 + (catIndex * 0.1) }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className={`
                                            relative bg-white dark:bg-gray-800 rounded-xl p-3 
                                            border border-slate-100 dark:border-slate-700 
                                            shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10
                                            transition-all duration-300 group cursor-default flex items-center gap-3 overflow-hidden
                                        `}
                                    >
                                        {/* Hover Gradient Border Effect */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                                        {/* Icon Box with Glow */}
                                        <div className="relative w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-slate-700 transition-all z-10">
                                            <div className="absolute inset-0 bg-indigo-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                                            {skill.icon}
                                        </div>

                                        <div className="flex flex-col z-10">
                                            <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {skill.name}
                                            </h4>
                                            {skill.level === 'Basics' && (
                                                <span className="text-[10px] font-medium text-yellow-600 dark:text-yellow-400/80">
                                                    Basic
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
