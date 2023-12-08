import pool from "../db.js";

export const getAllProgramas = async (req, res) => {
    const response = await pool.query("SELECT * FROM programas");
    res.status(200).json(response.rows);
};
