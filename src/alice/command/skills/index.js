const { button, reply } = require('yandex-dialogs-sdk');

module.exports = (ctx) => {

  const replyMsg = reply({
    text: 'Сейчас на нахожуть на этапе разработки, но уже сейчас я могу: ',
    buttons: [button('Показать ваши устройства.'),
              button('Включить свет.')]
  });

    ctx.reply(replyMsg);
};