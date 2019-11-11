import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const User = mongoose.model('User', userSchema)
export { User }
