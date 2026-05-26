import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './lib/db.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import cors from 'cors';
import { app, server } from './lib/socket.js';

dotenv.config();
// const app = express();

const PORT = process.env.PORT || 5001;
const allowedOrigins =
  process.env.FRONTEND_URL.split(',') || 'http://localhost:5173';

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Use server.listen instead of app.listen
server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});
