import User from '../model/user.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuntheticatedError } from '../errors/index.js'
const register = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError(` please provide all values`)
  }

  let user = await User.create(req.body)
  const token = user.createJWT()
  user = await User.findById(user._id).select('-password')
  res.status(StatusCodes.OK).json({ user, token })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email })

  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}
const updateUser = async (req, res) => {
  res.send('update User ')
}

export { register, login, updateUser }
