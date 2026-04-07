import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMobileAlt, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
    // Highlight Cards Data
    const highlights = [
        {
            icon: FaLaptopCode,
            title: "React Developer Experience",
            desc: "Built and maintained real-world web applications using React, focusing on reusable components, state management, and clean UI architecture."
        },
        {
            icon: FaServer,
            title: "MERN Stack Development",
            desc: "Developed full-stack applications using MongoDB, Express, React, and Node.js, including API integration and database management."
        },
        {
            icon: FaMobileAlt,
            title: "Responsive UI Development",
            desc: "Designed and implemented mobile-friendly interfaces with Tailwind CSS, ensuring consistent user experience across devices."
        },
        {
            icon: FaRocket,
            title: "Performance & Optimization",
            desc: "Improved application performance by optimizing rendering, reducing load time, and following best practices in modern web development."
        }
    ];


    return (
        <section id="about" className="py-12 bg-gray-100 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorative Elements */}

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800  dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        I am a passionate <span className="text-indigo-600 dark:text-indigo-400 font-medium">MERN Stack Developer</span> with hands-on experience building full-stack applications using React.js, Node.js, Express.js, and MongoDB.
                        I have worked on real-world projects including a blood donation platform and responsive web apps, focusing on scalable architecture, API integration, and performance.
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
                            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-slate-200 leading-relaxed text-sm">
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
