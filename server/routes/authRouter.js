import express from 'express'
const router = express.Router()

import { register, login, updateUser } from '../controller/authController.js'
import authenticateUser from '../middleware/auth.js'
import testUser from '../middleware/testUser.js'

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})
router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

export default router
