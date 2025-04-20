import express from "express"
import { create, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js"

// Crear router
const route = express.Router();

// Definir ruta POST /user que llama a la función create
route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", updateUser);
route.delete("/delete/user/:id", deleteUser);

export default route;