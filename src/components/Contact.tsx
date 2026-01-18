import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-10 right-10 bg-linear-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-4 backdrop-blur-md border border-white/20"
                >
                    <div className="bg-white/20 p-2 rounded-full">
                        <FiMail className="text-xl" />
                    </div>
                    <span className="font-semibold text-lg">{message}</span>
                    <button onClick={onClose} className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setShowToast(true);
        setFormState({ name: '', email: '', message: '' });
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
                <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-30"></div>
            </div>

            <Toast
                message="Message sent successfully! Thank you."
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I’d love to hear from you.
                    </p>
                    <div className="w-24 h-1.5 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact Details</h3>
                        <p className="text-gray-600 dark:text-slate-300 mb-10 leading-relaxed text-lg">
                            I'm currently available for freelance work and full-time opportunities.
                            Connect with me via email or social media.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <a href="mailto:jagath9360@gmail.com" className="flex items-center space-x-5 group p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Email</h4>
                                    <p className="text-gray-600 dark:text-slate-400 font-medium">jagath9360@gmail.com</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-300">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-slate-400 font-medium">Chennai, Ashok Nagar</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Connect with me</h4>
                            <div className="flex space-x-4">
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
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="peer w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 focus:outline-hidden focus:border-indigo-600 dark:focus:border-indigo-500 placeholder-transparent transition-all outline-none"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-5 -top-2.5 bg-white dark:bg-slate-800 px-2 text-sm text-gray-500 dark:text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm font-medium rounded-md"
                                >
                                    Your Name
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="peer w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 focus:outline-hidden focus:border-indigo-600 dark:focus:border-indigo-500 placeholder-transparent transition-all outline-none"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-5 -top-2.5 bg-white dark:bg-slate-800 px-2 text-sm text-gray-500 dark:text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm font-medium rounded-md"
                                >
                                    Your Email
                                </label>
                            </div>
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="peer w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-700 focus:outline-hidden focus:border-indigo-600 dark:focus:border-indigo-500 placeholder-transparent transition-all resize-none outline-none"
                                    placeholder="Message"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-5 -top-2.5 bg-white dark:bg-slate-800 px-2 text-sm text-gray-500 dark:text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm font-medium rounded-md"
                                >
                                    Your Message
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg rounded-xl font-bold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <FiMail className="inline-block text-xl" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
