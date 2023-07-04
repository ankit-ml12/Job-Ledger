import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
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

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export default mongoose.model('User', UserSchema)
