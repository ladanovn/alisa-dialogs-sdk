const Alice = require('yandex-dialogs-sdk')
const db = require('./db/db.json');
const alice = new Alice()

const { button } = Alice

const aliceCorsMiddleware = (params) => {
  return ctx => {
    if (ctx.server) {
      ctx.server.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
      })
    }
  }
}

alice.use(aliceCorsMiddleware())

alice.welcome((ctx) => {
  ctx.reply({
    text: 'Привет! Тебя приветствует Home Bot. Чем я могу быть полезен ?',
    buttons: [button('Что ты умеешь ?')]
  })
});

alice.command('Что ты умеешь ?', (ctx) => {
  ctx.reply({
    text: 'Сейчас на нахожуть на этапе разработки, но уже сейчас я умею: ',
    buttons: [button('Показать мои устройства'),
              button('Включить свет в кухне'),
              button('Включить свет в спальне'),
              button('Выключить весь свет')]
  });
});

alice.command(['Показать мои устройства', 
               'Что у меня есть ?'], (ctx) => {
    console.log(ctx.userId)
      
  });

alice.any((ctx) => {
  ctx.reply('Увы, я пока не знакома с этой командой')
})

const port = 3030;
alice.listen('/', port).then(console.log('listening on: ', port))