import User from '../model/user.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError(` please provide all values`)
  }

  const user = await User.create(req.body)
  const token = user.createJWT()
  user.select('-password')
  res.status(StatusCodes.OK).json({ user, token })
}
const login = async (req, res) => {
  res.send('login user')
}
const updateUser = async (req, res) => {
  res.send('update User ')
}

export { register, login, updateUser }
