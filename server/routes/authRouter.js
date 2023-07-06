import express from 'express'
const router = express.Router()

import { register, login, updateUser } from '../controller/authController.js'
import authenticateUser from '../middleware/auth.js'

router.post('/register', register)
router.post('/login', login)
router.post('/updateUser', authenticateUser, updateUser)

export default router
