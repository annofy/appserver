const assert = require('assert'),
  News = require('../models/News')

describe('News', () => {
  describe('#get', () => {
    it('save', done => {
      News.getNewsById(5811)
        .then(news => {
          console.log(news)
          done()
        })
    })
  })
})