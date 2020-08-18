module.exports =  {
    "name": "default",
    "type": "mongodb",
    "url": "mongodb://mongo:mongo@db:27017/api",
    "entities": [
        "src/entity/*.*"
    ],
    "synchronize": true,
    "useUnifiedTopology": true,
    "useNewUrlParser": true,
    "logging": true
}