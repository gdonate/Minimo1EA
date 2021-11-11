"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = __importDefault(require("../controllers/usuario.controller"));
const router = express_1.Router();
router.get('/', usuario_controller_1.default.getAllUsuarios);
router.get('/:id', usuario_controller_1.default.getUsuario);
router.post('/new', usuario_controller_1.default.newUsuario);
router.put('/update/:id', usuario_controller_1.default.updateUsuario);
router.delete('/:id', usuario_controller_1.default.deleteUsuario);
//Exportem router x utilitzar rutes a app.ts
exports.default = router;
