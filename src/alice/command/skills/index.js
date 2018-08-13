import { button, reply } from 'yandex-dialogs-sdk';

export default function (ctx) {
  const replyMsg = reply({
    text: 'Сейчас на нахожуть на этапе разработки, но уже сейчас я могу: ',
    buttons: [button('Показать ваши устройства.'),
              button('Включить свет.')]
  });

  ctx.reply(replyMsg);
};