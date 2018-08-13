import { reply } from 'yandex-dialogs-sdk';
import db from '../../../db/index.json';

export default async function (ctx) {
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