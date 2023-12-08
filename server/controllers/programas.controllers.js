import pool from "../db.js";

export const getAllProgramas = async (req, res) => {
    const response = await pool.query("SELECT * FROM programa");
    res.status(200).json(response.rows);
};
export const getProgramaById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM programa WHERE programa_id = $1", [id]);
    res.json(response.rows);
}
export const createPrograma = async (req, res) => {
    console.log(req.body);
    const { programa_id, facultad_id, nombre, cod_programa, tipo } = req.body;
    const response = await pool.query("INSERT INTO programa (programa_id, facultad_id, nombre, cod_programa, tipo) VALUES ($1, $2, $3, $4, $5)", [programa_id, facultad_id, nombre, cod_programa, tipo]);
    res.json({
        message: "Programa Added successfully",
        body: {
            programa: { facultad_id, programa_id, nombre, cod_programa, tipo }
        },
        response
    })
}
export const updatePrograma = async (req, res) => {
    const id = parseInt(req.params.id);
    const { programa_id, facultad_id, nombre, cod_programa, tipo } = req.body;

    const response = await pool.query("UPDATE programa SET programa_id = $1, facultad_id = $2, nombre = $3, cod_programa = $4, tipo = $5 WHERE programa_id = $6", [
        programa_id, facultad_id, nombre, cod_programa, tipo, id
    ]);
    res.json("Programa Updated Successfully");
}
export const deletePrograma = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM programa where programa_id = $1", [
        id
    ]);
    res.json(`Programa ${id} deleted Successfully`);
}