import { Router } from "express"
import UserController from "./app/controllers/UserController.mjs"
import SessionController from "./app/controllers/SessionController.mjs"
import ProductController from "./app/controllers/ProductController.mjs"

const routes = new Router()

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)
routes.post("/products", ProductController.store)

export default routes
