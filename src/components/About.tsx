import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
    // Highlight Cards Data
    const highlights = [
        {
            icon: FaLaptopCode,
            title: "Frontend Specialist",
            desc: "Crafting responsive, high-performance user interfaces with React & Tailwind CSS."
        },
        {
            icon: FaServer,
            title: "Full Stack Capable",
            desc: "Building robust backends and APIs using Node.js, Express, and MongoDB."
        },
        {
            icon: FaMobileAlt,
            title: "Modern Design",
            desc: "Creating aesthetic, user-first experiences with a focus on clean UI/UX."
        },
        {
            icon: FaRocket,
            title: "Performance",
            desc: "Optimizing code for speed, scalability, and seamless user interaction."
        }
    ];


    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        I am a passionate <span className="text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Developer</span> dedicated to building clean, scalable, and user-friendly web applications.
                        With a strong focus on performance and modern design, I turn complex problems into elegant digital solutions.
                    </p>
                </motion.div>

                {/* Highlight Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
                        >
                            <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Philosophy & Stats Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Quick Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
