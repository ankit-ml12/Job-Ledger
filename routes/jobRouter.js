import express from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  showState,
  updateJob,
} from '../controller/jobController.js'
import testUser from '../middleware/testUser.js'
const router = express.Router()

router.post('/', testUser, createJob)
router.get('/', getAllJobs)
router.get('/stats', showState)
router.delete('/:id', testUser, deleteJob)
router.patch('/:id', testUser, updateJob)

export default router
