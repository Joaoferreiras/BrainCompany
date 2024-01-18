import { Router } from "express"
import UserController from "./app/controllers/UserController.mjs"
import SessionController from "./app/controllers/SessionController.mjs"
import ProductController from "./app/controllers/ProductController.mjs"
import multer from "multer"
import multerConfig from "./config/multer.cjs"

const routes = new Router()
const upload = multer(multerConfig)

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)
routes.post("/products", upload.array("files"), ProductController.store)

export default routes
