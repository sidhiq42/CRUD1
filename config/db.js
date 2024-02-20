import mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors';
dotenv.config()
const connectDB = async () => {
    try {
        const dbconn = await mongoose.connect(process.env.MONGODB)
        console.log(`Database Connected Successfully:`.bgYellow+`--- ${dbconn.connection.host}`.bgCyan);
        return dbconn; 
    } catch (error) {
        console.error(`Database Not Connected: ${error.message}`.red);
        throw new Error('Database connection failed');
    }
};

export default connectDB;
