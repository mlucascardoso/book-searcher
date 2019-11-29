const dotenv = require('dotenv');

const loadDotEnv = () => {
  const env = dotenv.config();

  if (!env) {
    throw new Error('️⚠️ ️️.env file not found ⚠️');
  }
};

const getEnvVariables = () => {
  loadDotEnv();

  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    logs: {
      level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
      prefix: '/api',
    },
  };
};

module.exports = {
  loadDotEnv,
  getEnvVariables,
};
