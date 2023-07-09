import Job from '../model/job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

const createJob = async (req, res) => {
  const { position, company } = req.body

  if (!position || !company) {
    throw new BadRequestError('Please Provide All Values')
  }

  req.body.createdBy = req.user.userId

  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
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
