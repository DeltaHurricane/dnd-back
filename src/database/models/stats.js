import mongoose from 'mongoose'

const statsSchema = new mongoose.Schema({

  attributes: {
    STR: {
      type: Number
    },
    DEX: {
      type: Number
    },
    CON: {
      type: Number
    },
    INT: {
      type: Number
    },
    WIS: {
      type: Number
    },
    CHA: {
      type: Number
    }
  },
  class: {
    type: String
  },
  race: {
    type: String
  },
  traits: {
    name: {
      type: String
    },
    ca: {
      type: Number
    },
    hp: {
      type: Number
    },
    mana: {
      type: Number
    },
    lv: {
      type: Number
    }
  }

}, { _id: false })

export { statsSchema }
