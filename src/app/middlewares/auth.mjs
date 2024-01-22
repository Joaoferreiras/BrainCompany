import jwt from "jsonwebtoken"

export default (request, response, next) => {
  const authToken = request.headers.authorization

  console.log(authToken)

  return next()
}
