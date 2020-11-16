const { stringify } = require('querystring');

module.exports = (http) => async (to, msg, { apiKey }) => await (
    await http(`https://sms.ru/sms/send?${stringify({ api_id: apiKey, json: 1, msg, to })}`)
).json();
