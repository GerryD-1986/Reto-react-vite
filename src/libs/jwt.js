import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export function createAccessToken(payload){
return new Promise((resolve, reject) => {
    jwt.sign(
       payload,
       JWT_SECRET,
    {
      expiresIn: "1d",
    
    },
    (err, token) => {
        if(err) reject(err);
        resolve(token);
    }
    );

});

}