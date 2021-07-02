const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    const DBPASS = config.get('DBPASS')
    mongoose.connect(
        `mongodb://faiz:${DBPASS}@198.74.57.132:27017/amazonDB?authSource=admin`,
        {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
        .then(() => winston.info('Connected to Amazon DB successfully...'))
}