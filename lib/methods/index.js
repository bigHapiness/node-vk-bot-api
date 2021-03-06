const sendMessage = require('./sendMessage')
const startPolling = require('./startPolling')
const getLongPollParams = require('./getLongPollParams')
const use = require('./use')
const command = require('./command')
const next = require('./next')
const execute = require('./execute')

module.exports = {
  sendMessage,
  startPolling,
  getLongPollParams,
  use,
  command,
  next,
  execute,
}
