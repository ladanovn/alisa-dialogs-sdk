const { button, reply } = require('yandex-dialogs-sdk');
const { sample } = require('lodash');

const db = require('../../../db/index.json');
const mqtt = require('../../../mqtt');

async function turnOff(ctx) {
  turn(ctx, 'off')
}

async function turnOn(ctx) {
  turn(ctx, 'on')
}

async function turn(ctx, state_turn) {

  let user = db[0];
  let where = '';

  if (ctx.body){
    switch(ctx.body.where){
      case 'кухне': 
        where = 'кухня';
        break;
      case 'кухне':
        where = 'кухня';
        break;
      case 'спальне':
        where = 'спальня';
        break;
    }
  }

  for (let device of user.user_devices) {
    if ((device.type === 'light') && 
          ((device.namespace.includes(where)) || (where === ''))) {

      mqtt.publish('/alisa', JSON.stringify({
        deviceId: device.device_id,
        turn: state_turn
      }));
    };
  };

  ctx.reply(`${sample(['Рада стараться', 
                       'Все сделала.',
                       'Готово.'])}`);

}

module.exports = {
  turnOn,
  turnOff
}