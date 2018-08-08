const Alice = require('yandex-dialogs-sdk')
const db = require('./db/db.json');
const alice = new Alice()

const { button, reply } = Alice

alice.welcome((ctx) => {
  const replyMsg = reply({
    text: 'Привет! Тебя приветствует Home Bot. \n Чем я могу быть полезен ?',
    buttons: [button('Что ты умеешь ?')]
  })
  ctx.reply(replyMsg)
});

alice.command('Что ты умеешь ?', (ctx) => {
  const replyMsg = reply({
    text: 'Сейчас на нахожуть на этапе разработки, но уже сейчас я могу: ',
    buttons: [button('Показать ваши устройства'),
              button('Включить свет')]
  })
  ctx.reply(replyMsg);
});

alice.command(['Показать мои устройства', 
               'Показать ваши устройства',
               'Что у меня есть ?'], (ctx) => {

    const user = db[0];

    const Msg = {
      text: "Ваши устройства",
      card: {
        type: "ItemsList",
        header: {
          text: "Ваши устройства"
        },
        items: []
      }
    };

    for (let device of user.user_devices){
      Msg.card.items.push({
        image_id: device.image.id,
        title: device.name
      });
    }

    const replyMsg = reply(Msg);
    ctx.reply(replyMsg)
      
  });

alice.command('включи свет', ctx => {
  const user = db[0];

  for (let device of user.user_devices){
    if (device.type === 'light') {
      // mqtt request
    }
  };

  ctx.reply('Рада стараться');
})


alice.any((ctx) => {
  ctx.reply('Увы, я пока не знакома с этой командой')
})

const port = 8000;
alice.listen('/', port).then(console.log('listening on: ', port))