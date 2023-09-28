import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'

class UnAuntheticatedError extends CustomAPIError {
  constructor(messege) {
    super(messege)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default UnAuntheticatedError
