import { sample } from 'lodash';
import db from '../../../db/index.json';
import mqtt from '../../../mqtt';

export async function turnOn(ctx) {
  turn(ctx, {
    turn: 'on',
    useWhere: false
  });
};

export async function turnOff(ctx) {
  turn(ctx, {
    turn: 'off',
    useWhere: false
  });
};

export async function turnOnWhere(ctx) {
  turn(ctx, {
    turn: 'on',
    useWhere: true
  });
};

export async function turnOffWhere(ctx) {
  turn(ctx, {
    turn: 'off',
    useWhere: true
  });
};

async function turn(ctx, options) {
  const user = db[0];
  let devices = [];
  let where = '';

  if (options.useWhere) {
    where = ctx.message
              .split(' ')
              .slice(-1)[0]
              .replace('.', '')};

  for (let device of user.user_devices) {
    let re = new RegExp(device.where, "i");
    if ((device.type === 'light') && 
          ((!options.useWhere) || (where.search(re) !== -1))) {

      mqtt.publish('/alisa', JSON.stringify({
        deviceId: device.device_id,
        turn: options.turn || "off"
      }));
      devices.push(device);
    }
  };

  if (devices.length > 0) {
    ctx.reply(`${sample(['Рада стараться', 
      'Все сделала.', 'Готово.'])}`);
  } else {
    if (options.useWhere) {
      ctx.reply(`${sample(['Ваших', 'Подключенных'])} устройств в 
      ${where} не ${sample(['найдено', 'обнаружено'])}.`)
    } else {
      ctx.reply(`${sample(['Ваших', 'Подключенных'])} устройств 
      не ${sample(['найдено', 'обнаружено'])}.`)
    }
  }
}