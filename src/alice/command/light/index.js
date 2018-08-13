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
  if (ctx.body) {
    where = ctx.body.where || '';
  }

  for (let device of user.user_devices) {
    const re = new RegExp(device.namespace, "i");

    if ((device.type === 'light') && 
          ((where.search(re)!== -1) || (where === ''))) {

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