import express from "express"
import routes from "./routes.mjs"
import "./database/index.mjs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads")),
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
