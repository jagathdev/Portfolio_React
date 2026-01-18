import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Internship', to: 'internship' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || isMenuOpen
                ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-gray-200 dark:border-slate-700 shadow-md py-4'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-display font-bold text-gray-900 dark:text-white cursor-pointer tracking-tight flex items-center gap-1 group"
                >
                    <span className="text-indigo-600 dark:text-indigo-500">Port</span>folio<span className="text-indigo-600 dark:text-indigo-500"></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            activeClass="!text-indigo-600 dark:!text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/20 rounded-lg"
                            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-slate-800"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-px h-6 bg-gray-300 dark:bg-slate-700 mx-4"></div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:scale-105 transition-transform"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>

                {/* Mobile Actions */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400"
                    >
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-900 dark:text-white p-1"
                        aria-label="Toggle Menu"
                    >
                        <motion.div
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Full Width) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setIsMenuOpen(false)}
                                    activeClass="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold"
                                    className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
