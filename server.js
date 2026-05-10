const express = require('express'); // 1. Bring the engine
const cors = require('cors');        // 2. Bring the bridge
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const geniusRoutes = require('./routes/geniusRoutes');

// Load the Secret Vault
dotenv.config();

const app = express(); // 3. INITIALIZE THE APP (THE BIRTH)

// --- MIDDLEWARE (THE PROTOCOLS) ---
app.use(cors({
  origin: "*", // Allow all origins during the recognition phase
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// --- ROUTES ---
app.use('/api/geniuses', geniusRoutes);

// The Connection Logic (The Mirror of Al-Amin)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("------------------------------------------");
        console.log("SUCCESS: The Mirror of Al-Amin is Connected!");
        console.log("------------------------------------------");
    } catch (error) {
        console.error("CONNECTION FAILURE:", error.message);
        process.exit(1); 
    }
};

connectDB();

// The Pulse (Root Health Check)
app.get('/', (req, res) => {
    res.status(200).send("System Active: The Genius Engine is Witnessing.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));