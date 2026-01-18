import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-9xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">404</h1>
            <p className="text-2xl font-medium mb-8">Page Not Found</p>
            <Link to="/" className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
