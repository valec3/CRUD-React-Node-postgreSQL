import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { createAccessToken } from "../libs/jwt.js";

export const signup = async (req, res) => {
  // req: request (petición), description: Es lo que el usuario envía
  // res: response (respuesta), description: Es lo que nosotros le enviamos al usuario
  const { username, email, password } = req.body;
  try {
    // Buscar el usuario en la base de datos
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "The user email already exists" });

    // Encriptar la contraseña con SHA-256 (primer método)
    const sha256 = crypto.createHash("sha256");
    sha256.update(password);
    const passwordHashOne = sha256.digest("hex");

    // Encriptar la contraseña con bcrypt (segundo método)
    const passwordHashTwo = await bcrypt.hash(passwordHashOne, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHashTwo,
    });

    // Guardar el usuario en la base de datos
    const userSaved = await newUser.save();

    // Crear el token
    const accessToken = await createAccessToken({
      id: userSaved._id,
      username: userSaved.username,
    });

    res.cookie("access-token", accessToken);
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "The user does not exists" });

    // Encriptar la contraseña con SHA-256 (primer método)
    // para luego usar bcrypt (segundo método) para comparar las contraseñas
    const sha256 = crypto.createHash("sha256");
    sha256.update(password);
    const passwordHashOne = sha256.digest("hex");

    // Validar la contraseña usando bcrypt (segundo método)
    const validPassword = await bcrypt.compare(passwordHashOne, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Incorrect password" });

    // Crear el token
    const accessToken = await createAccessToken({
      id: user._id,
      username: user.username,
    });

    res.cookie("access-token", accessToken);
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
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
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
