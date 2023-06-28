const erroHandlerMiddleware = (err, req, res, next) => {
  res.json({ err: 'some error' })
}
export default erroHandlerMiddleware
