"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res, next) => {
    res.send('ok');
});
app.listen(8000, () => {
    console.log(`Running on ${PORT}`);
});
