import express from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  showState,
  updateJob,
} from '../controller/jobController.js'
const router = express.Router()

router.post('/', createJob)
router.get('/', getAllJobs)
router.get('/stats', showState)
router.delete('/:id', deleteJob)
router.patch('/:id', updateJob)

export default router
