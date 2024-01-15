import { Router } from "express"
import { v4 } from "uuid"
import User from "./app/models/User.mjs"

const routes = new Router()

routes.get("/", async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: "João",
    email: "test@gmail.com",
    password_hash: "1abc23",
  })

  return response.json(user)
})

export default routes
