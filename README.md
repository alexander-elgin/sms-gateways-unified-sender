# SMS Gateways

## Install
```sh
$ npm install sms-gateways
```

## Usage
```javascript
import { sms, smsc } from 'sms-gateways';

const phoneNumber = '+74951234567';
const message = 'test';
const apiKey = '<apiKey>';
const login = '<login>';
const password = '<password>';

sms(phoneNumber, message, { apiKey });
smsc(phoneNumber, message, { login, password });
```

## Supported Gateways

* `iqsms` see https://iqsms.ru/
* `sms` see https://sms.ru/
* `smsc` see https://smsc.ru/
