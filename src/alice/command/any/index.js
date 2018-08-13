const { button, reply } = require('yandex-dialogs-sdk');
const { sample } = require('lodash');

module.exports = (ctx) => {
	
  ctx.reply(`${sample(['Увы, я пока не знакома с этой командой.',
             'Я не знаю эту команду.',
             'Я вас не поняла.'])}`)
}