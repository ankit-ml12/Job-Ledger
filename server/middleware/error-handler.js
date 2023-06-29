import { StatusCodes } from 'http-status-codes'
const erroHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message)
  const defaultErrro = {
    statusCode: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'something went wrong, try again leter',
  }
  if (err.name == 'ValidationError') {
    defaultErrro.statusCode = StatusCodes.BAD_REQUEST
    defaultErrro.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  if (err.code && err.code == 11000) {
    defaultErrro.statusCode = StatusCodes.BAD_REQUEST
    defaultErrro.msg = `${Object.keys(err.keyValue)} field has to be unique `
  }
  res.status(defaultErrro.statusCode).json({ err: defaultErrro.msg })
}
export default erroHandlerMiddleware
