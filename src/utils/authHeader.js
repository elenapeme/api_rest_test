const jwt = require('jsonwebtoken');


// Token Secret
const secret_token = require("../utils/config");

//authenticate every call
exports.authHeader = authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!token) {
            res.status(401).send("Access Denied. You need a token.")
        } else {
            try{
                // TODO make it role based
                const decodedJWT = jwt.verify(token, secret_token.SECRET_TOKEN);
                next();
            } catch (err) {
                res.status(401).send("Invalid Token")
            }
        }
    } else {
        res.sendStatus(401);
    }
};



