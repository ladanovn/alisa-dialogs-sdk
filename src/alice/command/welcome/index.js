import { button, reply } from 'yandex-dialogs-sdk';

export default function(ctx) {	
	const replyMsg = reply({
				text: `Привет! Тебя приветствует Home Bot. \n 
				       Чем я могу быть полезена ?`,
        buttons: [button('Что ты умеешь ?')]
			});
			
  ctx.reply(replyMsg)
}