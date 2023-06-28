import mongoose from 'mongoose'

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log('connected to database :)')
    })
    .catch((err) => {
      console.log(err)
    })
}

export default connectDB
