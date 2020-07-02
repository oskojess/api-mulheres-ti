const mongoose = require('mongoose');

const Biography = mongoose.model('Biography')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const biographies = await Biography.paginate({}, { page, limit: 10 })

    return res.json(biographies)
  },

  async show(req, res) {
    const biography = await Biography.findById(req.params.id)
    return res.json(biography)
  },

  async store(req, res) {
    const biography = await Biography.create(req.body)

    return res.json(biography)
  },


  async destroy(req, res) {
    await Biography.findByIdAndRemove(req.params.id)
    return res.send()
  }
}