import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import pool from "../db.js";

export const signup = async (req, res) => {
    // req: request (petición), description: Es lo que el usuario envía
    // res: response (respuesta), description: Es lo que nosotros le enviamos al usuario
    const { username, email, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        if (user.rows.length > 0)
            return res.status(400).json({ message: "The users already exists" });

        // Encriptar la contraseña con bcrypt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Crear el usuario en la base de datos
        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, passwordHash]
        );

        // Crear el token
        const accessToken = await createAccessToken({
            id: newUser.rows[0]._id,
            username: newUser.rows[0].username,
        });

        res.cookie("access-token", accessToken);
        res.status(200).json({
            id: newUser.rows[0]._id,
            username: newUser.rows[0].username,
            email: newUser.rows[0].email,
            createdAt: newUser.rows[0].createdAt,
            updatedAt: newUser.rows[0].updatedAt,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await pool.query(
            "SELECT * FROM vw_usuario_login WHERE email = $1",
            [email]
        );
        if (user.rows.length === 0)
            return res.status(400).json({ message: "The user does not exists" });

        // Validar la contraseña
        const validPassword = await bcrypt.compare(
            password,
            user.rows[0].password
        );
        if (!validPassword)
            return res.status(400).json({ message: "Invalid password" });

        // Crear el token
        const accessToken = await createAccessToken({
            id: user.rows[0].id,
            username: user.rows[0].username,
        });

        res.cookie("access-token", accessToken);
        res.status(200).json({
            id: user.rows[0].usuario_id,
            email: user.rows[0].email,
            token: accessToken,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const signout = async (req, res) => {
    try {
        res.clearCookie("access-token");
        res.status(200).json({ message: "Sign out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const profile = async (req, res) => {
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE _id = $1",
            [req.userId]
        );
        res.status(200).json({
            id: user.rows[0]._id,
            username: user.rows[0].username,
            email: user.rows[0].email,
            createdAt: user.rows[0].createdAt,
            updatedAt: user.rows[0].updatedAt,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};
