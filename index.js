import alice from './src/alice';
import config from './config/index.json';

alice.listen('/', config.app.port, () => {
  console.log(`Listening on port ${config.app.port}`)
});