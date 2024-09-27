import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import './VehicleDetails.css'; 

const VehicleDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/vehicles/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVehicle(data);
            } catch (error) {
                console.error('Error fetching vehicle:', error);
                setVehicle(null); 
            } finally {
                setLoading(false);
            }
        };
    
        fetchVehicle();
    }, [id]);

    if (loading) {
        return (
            <motion.div 
                className="loading-container" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }} 
            >
                <div className="loader"></div>
            </motion.div>
        );
    }

    const handleBackButtonClick = () => {
        navigate(-1); 
    };
    
    return (
        <motion.div 
            className="vehicle-details-bg-gradient" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }} 
        >
            <div className="vehicle-details">
                {vehicle ? (
                    <>
                        <h1>{vehicle.make} {vehicle.model}</h1>
                        <p>Year: {vehicle.year}</p>
                        <p>Price: ${vehicle.price}</p>
                        <p>Fuel Type: {vehicle.fuelType}</p>
                        <p>Mileage: {vehicle.mileage} miles</p>
                        <p>Transmission: {vehicle.transmission}</p>              
                        <button onClick={handleBackButtonClick} className="back-button">
                            Go back
                        </button>
                    </>
                ) : (
                    <p>Vehicle not found.</p>
                )}
            </div>
        </motion.div>
    );
};

export default VehicleDetails;
