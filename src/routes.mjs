import { Router } from "express"
import UserController from "./app/controllers/UserController.mjs"
import SessionController from "./app/controllers/SessionController.mjs"
import ProductController from "./app/controllers/ProductController.mjs"
import multer from "multer"
import multerConfig from "./config/multer.cjs"
import authMiddleware from "./app/middlewares/auth.mjs"

const routes = new Router()
const upload = multer(multerConfig)

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)

routes.use(authMiddleware)
routes.post("/products", upload.array("files"), ProductController.store)
routes.get("/products", ProductController.index)

export default routes
