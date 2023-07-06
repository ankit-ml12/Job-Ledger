import jwt from 'jsonwebtoken'
import { UnAuntheticatedError } from '../errors/index.js'

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuntheticatedError('Authentication invalid1')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnAuntheticatedError('Authentication invalid2')
  }
}

export default auth
