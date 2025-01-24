"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var authenticateToken = function (req, res, next) {
    var _a;
    // TODO: verify the token exists and add the user data to the request object
    // Extract the token from the Authorization header
    var token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    // Decode the JWT token
    var jwtToken = jsonwebtoken_1.default.decode(token);
    // Check if the JWT token was decoded successfully
    if (jwtToken) {
        // Get the secret key from environment variables
        var secretKey = process.env.JWT_SECRET_KEY || '';
        // Verify the token using the secret key
        jsonwebtoken_1.default.verify(token, secretKey, function (err, decoded) {
            // Handle token verification errors
            if (err) {
                return res.sendStatus(403); // Forbidden access
            }
            // Attach the decoded user information to the request object
            req.user = decoded;
            // Proceed to the next middleware or route handler
            return next();
        });
    }
};
exports.authenticateToken = authenticateToken;
