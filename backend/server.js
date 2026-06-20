import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "AI & Robotics Workshop API is running smoothly..." });
});

app.use('/api', enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`📡 Server executing in development mode on port: ${PORT}`);
});