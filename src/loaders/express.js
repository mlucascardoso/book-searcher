const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');
const { getEnvVariables } = require('../environment');
const {
  buildFailureResponse,
  buildSuccessResponse,
  notFoundMiddleware,
} = require('../middlewares');

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  /**
   * Useful if you're behind a reverse proxy
   * (Heroku, Bluemix, AWS ELB, Nginx, etc)
   * It shows the real IP in the Heroku or Cloudwatch logs
   */
  app.enable('trust proxy');

  // Enable Cross Origin Resource Sharing to all origins
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Load API routes
  app.use(getEnvVariables().api.prefix, routes());

  // Success response builder
  app.use(buildSuccessResponse);

  // catch 404 and forward to error handler
  app.use(notFoundMiddleware);

  app.use(buildFailureResponse);
};
