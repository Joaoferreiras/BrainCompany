import * as Yup from "yup"
import User from "../models/User.mjs"
import jwt from "jsonwebtoken"
import authConfig from "../../config/auth.mjs"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const checkPasswordOrEmailIncorrect = () => {
      return response
        .status(401)
        .json({ erro: "Verifique se seus dados estão corretos" })
    }

    if (!(await schema.isValid(request.body))) {
      return checkPasswordOrEmailIncorrect()
    }

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return checkPasswordOrEmailIncorrect()
    }

    if (!(await user.checkPassword(password))) {
      return checkPasswordOrEmailIncorrect()
    }

    return response.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
