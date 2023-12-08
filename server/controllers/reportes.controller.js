import pool from "../db.js";

export const getReportView = async (req, res) => { 
    const result = await pool.query('SELECT * FROM vw_programas_facultades ');
    res.json(result.rows);
}