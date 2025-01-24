"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var user_controller_js_1 = require("../../controllers/user-controller.js");
var router = express_1.default.Router();
exports.userRouter = router;
// GET /users - Get all users
router.get('/', user_controller_js_1.getAllUsers);
// GET /users/:id - Get a user by id
router.get('/:id', user_controller_js_1.getUserById);
// POST /users - Create a new user
router.post('/', user_controller_js_1.createUser);
// PUT /users/:id - Update a user by id
router.put('/:id', user_controller_js_1.updateUser);
// DELETE /users/:id - Delete a user by id
router.delete('/:id', user_controller_js_1.deleteUser);
