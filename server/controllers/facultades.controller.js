import { Router } from "express";
import pool from "../db.js";
const router = Router();


export const getFacultades = (req, res) => {
    pool.query("SELECT * FROM facultad ORDER BY facultad_id ASC", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

export const getFacultadById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM facultad WHERE facultad_id = $1", [id]);
    res.json(response.rows);
}

export const createFacultad = async (req, res) => {
    console.log(req.body);
    const { facultad_id, nombre, abreviatura, id_area } = req.body;
    const response = await pool.query("INSERT INTO facultad (facultad_id, nombre, abreviatura, id_area) VALUES ($1, $2, $3, $4)", [facultad_id, nombre, abreviatura, id_area]);
    res.json({
        message: "Facultad Added successfully",
        body: {
            facultad: { facultad_id, nombre, abreviatura, id_area }
        },
        response
    })
}

export const updateFacultad = async (req, res) => {
    const id = parseInt(req.params.id);
    const { facultad_id, nombre, abreviatura, id_area } = req.body;

    const response = await pool.query("UPDATE facultad SET facultad_id = $1, nombre = $2, abreviatura = $3, id_area = $4 WHERE facultad_id = $5", [
        facultad_id, nombre, abreviatura, id_area, id
    ]);
    res.json("Facultad Updated Successfully");
}

export const deleteFacultad = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM facultad where facultad_id = $1", [
        id
    ]);
    res.json(`Facultad ${id} deleted Successfully`);
}


export default router;