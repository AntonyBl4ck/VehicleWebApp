import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails'; 
import LandingPage from './components/LandingPage'; 

const App = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('http://localhost:5000/api/vehicles'); 
            const data = await response.json();
            setVehicles(data);
        };
        fetchVehicles();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} /> 
                    <Route path="/vehicles" element={<VehicleList vehicles={vehicles} />} /> 
                    <Route path="/vehicles/:id" element={<VehicleDetails />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
