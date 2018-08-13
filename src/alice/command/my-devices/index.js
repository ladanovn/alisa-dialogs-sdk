const { button, reply } = require('yandex-dialogs-sdk');
const db = require('../../../db/index.json');
const mqtt = require('../../../mqtt');

module.exports = async (ctx) => {
  const user = db[0];
  const msg = {
    text: "Ваши устройства",
    card: {
      type: "ItemsList",
      header: {
        text: "Ваши устройства"
      },
      items: []
    }
  };
    
  for (let device of user.user_devices) {
    msg.card.items.push({
      image_id: device.image.id,
      title: device.name
    });
  };
    
  const replyMsg = reply(msg);
  ctx.reply(replyMsg);
          
}