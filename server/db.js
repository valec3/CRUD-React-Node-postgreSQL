import pkg from "pg";
const { Pool } = pkg;

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: "default",
    host: "ep-divine-truth-35320442-pooler.us-east-1.postgres.vercel-storage.com",
    database: "verceldb",
    password: "FXZ4Lhb2EVfQ",
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Esto es solo para entornos de desarrollo, no lo uses en producción sin configuración adecuada
    },
});

export default pool;