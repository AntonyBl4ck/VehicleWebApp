const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const vehicleRoutes = require('./routes/vehicles');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
