const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BiographySchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

BiographySchema.plugin(mongoosePaginate)

const Biography = mongoose.model('Biography', BiographySchema)

module.exports = Biography