import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide your name'],
    minlenght: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'lastName',
  },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    validate: {
      validator: validator.isEmail,
      messege: 'Please provide correct Email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minlenght: 6,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city',
  },
})

export default mongoose.model('User', UserSchema)
