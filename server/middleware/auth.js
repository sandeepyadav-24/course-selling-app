const jwt = require("jsonwebtoken");

// SECRET KEY
const secretKey = "sandyDon";

// AUTHENTICATE JWT //
const authJwt = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth) {
    const token = auth.split(" ")[1];
    if (token) {
      jwt.verify(token, secretKey, (err, result) => {
        if (err) throw err;
        req.user = result;

        next();
      });
    } else {
      res.status(403).json({ message: "No Authentication" });
    }
  } else {
    res.status(403).json({ message: "No Authentication" });
  }
};

// MODULE EXPORT
module.exports = {
  authJwt,
  secretKey,
};
