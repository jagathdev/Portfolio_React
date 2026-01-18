import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                            Jagath<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            Building digital experiences with passion and precision. Focused on creating intuitive and performant web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-600 dark:text-slate-400">
                                <FiMapPin className="mt-1 text-indigo-600 dark:text-indigo-400 shrink-0" />
                                <span>Chennai, Ashok Nagar</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600 dark:text-slate-400">
                                <FiMail className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                                <a href="mailto:jagath9360@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    jagath9360@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600 dark:text-slate-400">
                                <FiPhone className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                                <a href="tel:+919360270984" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    +91 93602 70984
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { Icon: FiGithub, href: 'https://github.com/jagathdev' },
                                { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/jagathdevloper/' },
                                { Icon: FaWhatsapp, href: 'https://wa.me/9360270984' },
                                { Icon: FiPhone, href: 'tel:+919360270984' }
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white dark:hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 dark:border-slate-800 mb-8" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 dark:text-slate-500 text-sm">
                        © {new Date().getFullYear()} Jagathratchagan V. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                    >
                        <span>Back to Top</span>
                        <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <FiArrowUp />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
