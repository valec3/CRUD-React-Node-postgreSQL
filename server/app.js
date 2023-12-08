import express from 'express';
import cookieParser from 'cookie-parser';
// import authRoutes from "./routes/auth.routes.js";
import programasRoutes from './routes/programas.routes.js';
import cors from 'cors';

const app = express();

// Parse incoming requests data
// convertir las peticiones entrantes en objetos JSON
app.use(express.json());
// Parse cookie
app.use(cookieParser());
// Habilita CORS en tu aplicación
app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Import routes from routes folder
// app.use("/api", authRoutes);
app.use('/programas', programasRoutes);

export default app;
