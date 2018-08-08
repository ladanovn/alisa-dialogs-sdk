const mqtt = require('mqtt')
const config =  require('../../config')

const client = mqtt.connect({
    host: config.mqtt.host,
    port: config.mqtt.port,
    username: config.mqtt.username,
    password: config.mqtt.password
})

client.on('connect', () => {
    console.log("MQTT broker connected");
});

client.on("error", error => { 
    console.log("Can't connect " + error);
});

module.exports = client;