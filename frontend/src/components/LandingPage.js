import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './LandingPage.css'; 

const LandingPage = () => {
    const navigate = useNavigate();

    const handleExploreVehicles = () => {
        navigate('/vehicles'); 
    };

    return (
        <motion.div 
            className="landing-bg-gradient" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} 
        >
            <div className="landing-page"> 
                <h1>Welcome to the Vehicle App</h1>
                <p>Explore our amazing collection of vehicles!</p>
                <button onClick={handleExploreVehicles} className="landing-button">
                    Explore Vehicles
                </button>
            </div>
        </motion.div>
    );
};

export default LandingPage;
