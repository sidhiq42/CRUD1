import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { router } from './routes/userRouter.js';
import cors from 'cors'; // Import cors package if you intend to use it

// Connect to the database
connectDB()

dotenv.config();

const app = express();
app.use(express.json());

// Use CORS middleware if necessary
app.use(cors());

// Define your routes
app.use('/api', router);

const PORT = process.env.PORT || 3001; // Define a default port if process.env.PORT is not available

app.listen(PORT, () => {
    console.log(`Server starting @ http://localhost:${PORT}`.bgGreen);
});
