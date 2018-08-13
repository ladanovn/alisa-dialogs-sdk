const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

const welcome = require('./command/welcome');
const skills = require('./command/skills');
const myDevices = require('./command/my-devices');
const light = require('./command/light');
const any = require('./command/any');

alice.welcome(welcome);
alice.command('Что ты умеешь ?', skills);
alice.command(ctx => {
  return ['Показать мои устройства.', 
          'Показать ваши устройства.',
          'Что у меня есть?'].includes(ctx.message)
}, myDevices);

alice.command(ctx => {
  return ['Включить свет.',
          'Включи свет.'].includes(ctx.message)
          }, light.turnOn);

alice.command(ctx => {
  return ['Выключить свет.',
          'Выключи свет.'].includes(ctx.message)
          }, light.turnOff);

alice.command('Включи свет в ${where}.', light.turnOn);          
alice.command('Включить свет в ${where}.', light.turnOn)
alice.command('Выключи свет в ${where}.', light.turnOff);
alice.command('Выключить свет в ${where}.', light.turnOff);
      
alice.any(any);

module.exports = alice;