var window;
const fetch = window !== undefined && window.fetch !== undefined ? window.fetch : require('node-fetch');

const engines = {
    iqsms: require('./iqsms')(fetch),
    sms: require('./sms')(fetch),
    smsc: require('./smsc')(fetch),
};

module.exports = engines;
