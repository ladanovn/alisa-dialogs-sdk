const { button, reply } = require('yandex-dialogs-sdk');

module.exports = (ctx) => {
	
	const replyMsg = reply({
				text: `Привет! Тебя приветствует Home Bot. \n 
				       Чем я могу быть полезена ?`,
        buttons: [button('Что ты умеешь ?')]
			});
			
  ctx.reply(replyMsg)
}