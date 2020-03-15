import { Router, Request, Response } from "express";

const route = Router();

import userController from "./controllers/userController";

route.post("/createUser", userController.userCreate);

route.post("/login", userController.userLogin);

export default route;
