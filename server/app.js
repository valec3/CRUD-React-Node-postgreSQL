import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import programasRoutes from './routes/programas.routes.js';
import facultadesRoutes from './routes/facultades.routes.js';
import reportesRoutes from './routes/reportes.routes.js';
import cors from 'cors';
import morgan from "morgan";

const app = express();

// Parse incoming requests data
// convertir las peticiones entrantes en objetos JSON
app.use(express.json());
// Parse cookie
app.use(cookieParser());
// Habilita CORS en tu aplicación
app.use(cors());
// logs
app.use(morgan("dev"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Import routes from routes folder
app.use("/api", authRoutes);
app.use('/api/programas', programasRoutes);
app.use('/api/facultades', facultadesRoutes);
app.use('/api/reportes', reportesRoutes);

export default app;
