import { mongoose } from './connection'
import { characterSchema } from './character'
import { toLower } from '../utils/setters'

const gameSchema = new mongoose.Schema({

  name: {
    type: String,
    set: toLower,
    unique: true,
    require: true
  },
  onlineUsers: {
    type: [String]
  },
  username: {
    type: [String]
  },
  characters: {
    type: [characterSchema]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Game = mongoose.model('Game', gameSchema)
export { Game }
