import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const authRequire = (req, res, next) =>{
  const { token }= req.cookies;

  if(!token)
    return res.status(401).json({message: "No token, authorization denied"});

  jwt.verify(token, JWT_SECRET, (err, user) =>{
    if(err) return res.status(403).json({message:"Invalid token"});
    req.user= user;
    next();
  })
};