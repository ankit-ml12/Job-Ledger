import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
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

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

const database_url = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
// const PORT = 3000

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
// app.use('/', (req, res) => {
//   res.json({ msg: 'abjut' })
// })
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
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
