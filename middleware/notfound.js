const notFound = (req, res) => {
  res.status(404).json({ msg: 'this route does not exist' })
}
export default notFound
