import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const education = [
    {
        degree: 'MERN Stack Development',
        institution: 'SLA Institute, KK Nagar, Chennai',
        year: 'July 2025 - Present',
        description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js. Building full-stack web applications.',
        icon: FaLaptopCode
    },
    {
        degree: 'Master of Science in Computer Science',
        institution: 'SS Govt Arts College, Tiruttani',
        year: '2023 - 2025',
        description: 'Secured 75%. Advanced studies in algorithms, data structures, and software architecture.',
        icon: FaGraduationCap
    },
    {
        degree: 'Stenographer Course',
        institution: 'Govt ITI, Arakkonam',
        year: '2022 - 2023',
        description: 'Secured 71%. Specialized skills in stenography and office management.',
        icon: FaCertificate
    },
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Muthurangam Govt Arts College, Vellore',
        year: '2019 - 2022',
        description: 'Secured 65%. Foundation in computer science principles and programming languages.',
        icon: FaUniversity
    },
];

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 dark:bg-indigo-900/50"></div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* Empty Space */}
                            <div className="w-5/12 hidden md:block"></div>

                            {/* Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-800 flex items-center justify-center z-10 shadow-lg">
                                <edu.icon className="text-white text-xl" />
                            </div>

                            {/* Card */}
                            <div className="w-full md:w-5/12 bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700 relative z-10">
                                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-bold rounded-full mb-3">
                                    {edu.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                                <h4 className="text-md font-medium text-gray-600 dark:text-slate-300 mb-3">{edu.institution}</h4>
                                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
