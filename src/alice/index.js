const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

const command = require('./command')(alice)

module.exports = alice;