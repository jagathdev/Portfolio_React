import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp, FaReact, FaNodeJs, FaBootstrap, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiTailwindcss } from 'react-icons/si';
import profilePhoto from '../assets/photo/LinkedIn Profile .png';
import { FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

const Banner: React.FC = () => {
    // Skills arranged evenly around the profile image (9 skills ~40 degrees apart) with wide 250% spacing to avoid overlap
    const skills = [
        { name: 'HTML', Icon: FaHtml5, color: 'text-orange-500', position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-[150%]' }, // Top (0deg)
        { name: 'CSS', Icon: FaCss3Alt, color: 'text-blue-500', position: 'top-[15%] right-[15%] translate-x-[150%] -translate-y-[80%]' }, // Top-Right (40deg)
        { name: 'JavaScript', Icon: FaJs, color: 'text-yellow-400', position: 'top-1/2 right-[-5%] translate-x-[100%] -translate-y-1/2' }, // Right (90deg)
        { name: 'React', Icon: FaReact, color: 'text-cyan-400', position: 'bottom-[15%] right-[15%] translate-x-[150%] translate-y-[80%]' }, // Bottom-Right (135deg)
        { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-500', position: 'bottom-0 left-[70%] translate-y-[150%]' }, // Bottom-Right-Center (160deg)
        { name: 'Express', Icon: SiExpress, color: 'text-gray-800 dark:text-white', position: 'bottom-0 left-[20%] translate-y-[150%]' }, // Bottom-Left-Center (200deg)
        { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600', position: 'bottom-[15%] left-[15%] -translate-x-[150%] translate-y-[80%]' }, // Bottom-Left (225deg)
        { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-cyan-500', position: 'top-1/2 left-[-5%] -translate-x-[100%] -translate-y-1/2' }, // Left (270deg)
        { name: 'Bootstrap', Icon: FaBootstrap, color: 'text-purple-600', position: 'top-[15%] left-[15%] -translate-x-[150%] -translate-y-[80%]' }, // Top-Left (320deg)
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-6 pt-20 lg:pt-20">
            {/* Background Decor - Floating Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-700"></div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left z-10 order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-2 px-4 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-indigo-100 dark:border-slate-700 mb-6 shadow-xs"
                    >
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            Welcome to my Portfolio
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                        Hi, I’m <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                            Jagath
                        </span>
                    </h1>

                    <div className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-slate-300 mb-6 h-[40px] md:h-[60px] flex items-center justify-center lg:justify-start">I'm a&nbsp;
                        <TypeAnimation
                            sequence={[
                                'Frontend Devloper',
                                1500,
                                'React Devloper',
                                1500,
                                'MERN Stack Devloper',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="font-bold text-indigo-600 dark:text-indigo-400"
                            repeat={Infinity}
                            cursor={true}
                        />
                        <span className="ml-2"></span>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        I build modern, responsive, and animated web applications with a strong focus on UI and user experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="px-8 py-3.5 bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-full font-bold shadow-lg hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-1 hover:scale-105 cursor-pointer w-full sm:w-auto text-center"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="px-8 py-3.5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1 hover:scale-105 cursor-pointer w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Social Icons - Staggered Fade In */}
                    <div className="flex space-x-4 my-8 ">
                        <a href="https://github.com/jagathdev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiGithub size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/jagathdevloper/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiLinkedin size={22} />
                        </a>
                        <a href="https://wa.me/9360270984" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 hover:scale-110 shadow-sm">
                            <FaWhatsapp size={22} />
                        </a>
                        <a href="tel:+919360270984" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:scale-110 shadow-sm">
                            <FiPhone size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column - Image & Floating Skills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full transform scale-90 animate-pulse"></div>

                    {/* Simple Profile Image Container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full rounded-full border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden relative z-10 bg-white dark:bg-slate-900"
                        >
                            <img
                                src={profilePhoto}
                                alt="Profile Picture"
                                className="w-full h-full object-cover object-top"
                            />
                        </motion.div>

                        {/* Floating Skills - Simple Orbiting Layout */}
                        <div className="block">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${skill.position} z-20`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.5 + index * 0.1
                                    }}
                                >
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md border border-gray-100 dark:border-slate-700 hover:scale-110 transition-transform cursor-default relative group">
                                        <skill.Icon className={`text-xl md:text-2xl ${skill.color}`} />

                                        {/* Simple Tooltip */}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
