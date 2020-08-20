const { MONGO_URL } = require('./src/environments')

module.exports = {
  "name": "default",
  "type": "mongodb",
  "url": MONGO_URL,
  "entities": [
    "src/entity/*.*"
  ],
  "synchronize": true,
  "useUnifiedTopology": true,
  "useNewUrlParser": true,
  "logging": true
}