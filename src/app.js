const express = require('express');

const { getEnvVariables } = require('./environment');

const Logger = require('./loaders/logger');

const startServer = async () => {
  const app = express();
  const environment = getEnvVariables();

  require('./loaders')(app);

  app.listen(environment.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }

    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${environment.port} 🛡️ 
      ################################################
    `);
  });
};

startServer();
