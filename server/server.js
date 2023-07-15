import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import cors from 'cors'
import morgan from 'morgan'
import 'express-async-errors'
import notFound from './middleware/notfound.js'
import erroHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'
import authRouter from './routes/authRouter.js'
import jobRouter from './routes/jobRouter.js'
import authenticateUser from './middleware/auth.js'
import testUser from './middleware/testUser.js'

const database_url = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
// const PORT = 3000

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors())
// app.use('/', (req, res) => {
//   res.json({ msg: 'abjut' })
// })
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use(notFound)
app.use(erroHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(database_url)
    app.listen(PORT, () => {
      console.log(`server is listning on PORT ${PORT}`)
    })
  } catch (error) {}
}

start()
