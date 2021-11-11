"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bar_2 = __importDefault(require("../models/bar"));
function getAllBares(req, res) {
    bar_2.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function getBar(req, res) {
    bar_2.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newBar(req, res) {
    const bar_1 = new bar_2.default({
        "id": req.body.id,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    });
    console.log(req.body);
    bar_1.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateBar(req, res) {
    const id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    bar_2.default.update({ "id": id }, { $set: { "id": id, "username": username, "password": password, "email": email } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
function deleteBar(req, res) {
    const { id } = req.params;
    bar_2.default.findOne({ "id": req.params.id }).remove().exec().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getAllBares, getBar, newBar, updateBar, deleteBar };
