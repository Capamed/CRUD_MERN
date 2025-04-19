import express from "express"
import {create} from "../controller/userController.js"

// Crear router
const route = express.Router();

// Definir ruta POST /user que llama a la función create
route.post("/user", create);

export default route;