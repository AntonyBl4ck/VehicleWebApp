import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { motion } from 'framer-motion'; 
import './VehicleList.css';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vehicles');
                if (!response.ok) {
                    throw new Error('Failed to fetch vehicles');
                }
                const data = await response.json();
                setVehicles(data);
            } catch (error) {
                setError(error.message); 
                console.error('Error fetching vehicles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    const filteredVehicles = vehicles.filter(vehicle => 
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.year.toString().includes(searchTerm)
    );

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <motion.div 
            className="vehicle-list" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }} 
        >
            <div className="bg-gradient">
                <input
                    type="text"
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                
                <div className="vehicle-cards">
                    {filteredVehicles.length > 0 ? (
                        filteredVehicles.map((vehicle) => (
                            <motion.div 
                                key={vehicle.id} 
                                className="vehicle-card" 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }}  
                                transition={{ duration: 0.5 }}
                            >
                                <Link to={`/vehicles/${vehicle.id}`} className="vehicle-link">
                                    <h2 className="vehicle-title">{vehicle.make} {vehicle.model}</h2>
                                    <p className="vehicle-detail">Year: {vehicle.year}</p>
                                    <p className="vehicle-detail">Price: ${vehicle.price}</p>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <p className="no-vehicles">No vehicles found matching your search.</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default VehicleList;
