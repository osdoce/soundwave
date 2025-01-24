"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_routes_js_1 = require("./auth-routes.js");
var index_js_1 = require("./api/index.js");
var auth_js_1 = require("../middleware/auth.js");
var router = (0, express_1.Router)();
router.use('/auth', auth_routes_js_1.default);
// TODO: Add authentication to the API routes
// Define a middleware to authenticate incoming requests
router.use('/api', auth_js_1.authenticateToken, index_js_1.default);
exports.default = router;
