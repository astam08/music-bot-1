function logChannel (channel, type, msg) {
  if (type === 'info') return channel.sendMessage(':bulb:**  | INFO | ** ' + msg)
  if (type === 'err') return channel.sendMessage(':warning:**  | ERROR | ** ' + msg)
  if (type === 'musinf') return channel.sendMessage(':musical_note:**  | MUSIC | ** ' + msg)
  if (type === 'vol') return channel.sendMessage(':loud_sound:**  | VOLUME | ** ' + msg)
  if (type === 'err') return channel.sendMessage(':warning:**  | ERROR | ** ' + msg)
  if (type === 'bl') return channel.sendMessage(':flag_black:**  | BLACKLIST | ** ' + msg)

  console.log('ERROR IN LOG CHANNEL')
}

function logConsole (type, msg) {
  if (type === 'info') return console.log('INFO >> ' + msg)
  if (type === 'err') return console.log('ERROR >> ' + msg)
  if (type === 'db') return console.log('DEBUG >> ' + msg)
  console.log('ERROR IN LOG CONSOLE')
}

module.exports = {
  logChannel: logChannel,
  logConsole: logConsole
}