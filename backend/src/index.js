import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './lib/db.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import cors from 'cors';
import { app, server } from './lib/socket.js';
import path from 'path';

dotenv.config();
// const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // backend

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// Use server.listen instead of app.listen
server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});
