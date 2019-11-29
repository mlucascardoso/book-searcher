const winston = require('winston');
const { getEnvVariables } = require('../environment');

const transports = [];
const environment = getEnvVariables();

if (environment.nodeEnv !== 'development') {
  transports.push(
    new winston.transports.Console(),
  );
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      ),
    }),
  );
}

const LoggerInstance = winston.createLogger({
  level: environment.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
});

module.exports = LoggerInstance;
