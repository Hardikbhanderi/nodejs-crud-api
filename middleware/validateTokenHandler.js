const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken= asyncHandler(async(req, res, next)=>{
let token;
let authHeader = req.headers.authorization || req.headers.Authorization;
if(authHeader && authHeader){
    
}
})