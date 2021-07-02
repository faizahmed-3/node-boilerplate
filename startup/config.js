const config = require('config');

module.exports = function () {
    if (!config.get('DBPASS')) {
        throw new Error('FATAL ERROR: Please enter your database password ');
    }

    if (!config.get('JWTKEY')) {
        throw new Error('FATAL ERROR: Please enter your token identifier ');
    }

    if (!config.get('EMAILPASS')){
        throw new Error('FATAL ERROR: Please enter your email password')
    }
}