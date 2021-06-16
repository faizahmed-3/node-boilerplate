const config = require('config');

module.exports = function () {
    if (!config.get('JWTKEY')) {
        throw new Error('FATAL ERROR: Please enter your token identifier ');
    } else if (!config.get('EMAILPASS')){
        throw new Error('FATAL ERROR: Please enter the password for you email')
    }
}