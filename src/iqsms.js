const { stringify } = require('querystring');

module.exports = (http) => async (phone, text, { login, password }) => await (
    await http(`http://api.iqsms.ru/messages/v2/send/?${stringify({ login, password, text, phone })}`)
).text();
