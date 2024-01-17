import * as Yup from "yup"
import User from "../models/User.mjs"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const checkPasswordOrEmail = () => {
      return response
        .status(401)
        .json({ erro: "Verifique se seus dados estão corretos" })
    }

    if (!(await schema.isValid(request.body))) {
      return checkPasswordOrEmail()
    }

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return checkPasswordOrEmail()
    }

    if (!(await user.checkPassword(password))) {
      return checkPasswordOrEmail()
    }

    return response.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
    })
  }
}

export default new SessionController()
