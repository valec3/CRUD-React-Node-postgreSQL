import jwt from "jsonwebtoken";
// secretKey

export const validateToken = (req, res, next) => {
    try {
        const accessToken = req.cookies.token || req.headers.authorization;
        if (!accessToken)
            return res.status(401).json({ message: "User not authenticated" });

        const validToken = jwt.verify(accessToken, 'secretKey');
        if (validToken) {
            req.user = validToken;
            return next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}