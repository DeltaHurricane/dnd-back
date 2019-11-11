import { mongoose } from './connection'
import { statsSchema } from './stats'

const characterSchema = new mongoose.Schema({

  username: {
    type: String,
    require: true
  },
  stats: {
    type: statsSchema,
    require: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

export { characterSchema }

const Character = mongoose.model('Character', characterSchema)

export { Character }
