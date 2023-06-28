const createJob = async (req, res) => {
  res.send('createJob')
}
const deleteJob = async (req, res) => {
  res.send('delete')
}
const getAllJobs = async (req, res) => {
  res.send('getall')
}
const updateJob = async (req, res) => {
  res.send('update job')
}
const showState = async (req, res) => {
  res.send('show state')
}

export { showState, createJob, deleteJob, getAllJobs, updateJob }
