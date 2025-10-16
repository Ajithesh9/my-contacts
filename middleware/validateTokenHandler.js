const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(res,req,next)=>{
    let token;
    let authHeader = req.headersSent.Authorization || req.headersSent.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.statusCode(400);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
        });
    }
})

module.exports = validateToken;