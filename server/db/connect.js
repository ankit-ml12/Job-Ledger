import mongoose from 'mongoose'

const connectDB = async (url) => {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('Connected to the database')
    })
    .catch((err) => {
      console.error(err)
    })
}

export default connectDB
