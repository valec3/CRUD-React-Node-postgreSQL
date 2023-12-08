import pool from "../db.js";

export const getReportView = async (req, res) => { 
    res.render('reportes/reportes');
}