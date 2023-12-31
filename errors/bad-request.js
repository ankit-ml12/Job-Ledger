import CustomApiError from './custom-api.js'
import { StatusCodes } from 'http-status-codes'
class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message)
    this.StatusCodes = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
