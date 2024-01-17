import { Router } from "express"
import UserController from "./app/controllers/UserController.mjs"
import SessionController from "./app/controllers/SessionController.mjs"

const routes = new Router()

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)

export default routes
