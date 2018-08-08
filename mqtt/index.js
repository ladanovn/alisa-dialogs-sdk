const mqtt = require('mqtt')
const config =  require('../config/mqtt')

const client = mqtt.connect({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password
})

client.on('connect', () => {
    console.log("MQTT broker connected");
});

client.on("error", error => { 
    console.log("Can't connect"+error)
});

module.exports = client;