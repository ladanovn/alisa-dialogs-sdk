import Alice from 'yandex-dialogs-sdk';

import * as light from './command/light';
import welcome from './command/welcome';
import skills from './command/skills';
import myDevices from './command/my-devices';
import any from './command/any';

const alice = new Alice()
alice.welcome(welcome);

alice.command(ctx => {
  return ['Что ты умеешь ?',
          'Помощь'].includes(ctx.message)
}, skills);

alice.command(ctx => {
  return ['Показать мои устройства.', 
          'Показать ваши устройства.',
          'Что у меня есть?'].includes(ctx.message)
}, myDevices);

alice.command(ctx => { 
  return ctx.message.search(/^Вкл[а-я]* свет.?$/i) !== -1 
}, light.turnOn);

alice.command(ctx => { 
  return ctx.message.search(/^Выкл[а-я]* свет.?$/i) !== -1 
}, light.turnOff);

alice.command(ctx => {
  return ctx.message.search(/^Вкл[а-я]* свет (на|в) [а-я]+.?$/) !== -1
}, light.turnOnWhere);

alice.command(ctx => {
  return ctx.message.search(/^Выкл[а-я]* свет (на|в) [а-я]+.?$/) !== -1
}, light.turnOffWhere);

alice.any(any);

export default alice;