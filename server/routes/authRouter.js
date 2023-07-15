import express from 'express'
const router = express.Router()

import { register, login, updateUser } from '../controller/authController.js'
import authenticateUser from '../middleware/auth.js'
import testUser from '../middleware/testUser.js'

router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

export default router
