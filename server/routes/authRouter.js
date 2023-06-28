import express from 'express'
const router = express.Router()

import { register, login, updateUser } from '../controller/authController.js'

router.post('/register', register)
router.post('/login', login)
router.post('/updateUser', updateUser)

export default router
