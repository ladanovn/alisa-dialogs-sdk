const alice = require('./src/alice');
const config = require('./config/index.json');

alice.listen('/', config.app.port, () => {
  console.log(`Listening on port ${config.app.port}`)
});