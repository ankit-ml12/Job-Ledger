import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()

import notFound from './middleware/notfound.js'
import erroHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'
import authRouter from './routes/authRouter.js'
import jobRouter from './routes/jobRouter.js'

const database_url = process.env.MONGO_URI
const PORT = process.env.PORT || 3000

app.use(express.json())
// app.use('/', (req, res) => {
//   res.json({ msg: 'abjut' })
// })
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobRouter)
app.use(notFound)
// app.use(erroHandlerMiddleware)

const start = async () => {
  try {
    // await connectDB(database_url)
    app.listen(PORT, () => {
      console.log(`server is listning on PORT ${PORT}`)
    })
  } catch (error) {}
}

start()
