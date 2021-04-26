const config = require('config');

module.exports = function () {
    if (!config.get('JWTKEY')) {
        throw new Error('FATAL ERROR: jwt key is not defined.\n' +
            '*** Run the following in terminal to fix***\n' +
            'windows: set JWTKEY=mykey\n' +
            'mac/linux: export JWTKEY=mykey');
    }
}