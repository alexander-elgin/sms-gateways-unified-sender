const { stringify } = require('querystring');

module.exports = (http) => async (phones, mes, { login, password }) => await (
    await http(`https://smsc.ru/sys/send.php?${stringify({ sender: login, login, psw: password, mes, phones })}`)
).text();
