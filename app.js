const express = require('express');
require('./src/db/mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const v1Router = require('./src/routes/v1')
const swaggerDocumentation = require("./src/swagger.json");

class AppServer {
  constructor() {
    this.SERVER_STARTED = 'Example server started on port: '
    this.app = express();
    /**
     * @todo init sentry here later
     */
    this.config()
  }

  config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation))
    this.app.use('/api/v1', v1Router)
  }

  start(port) {
    this.app.get('*', (req, res) => {
      res.status(200).json({
        message: 'Welcome, Entry Point'
      })
    });
    let server = this.app.listen(port, () => {
      console.info(`${this.SERVER_STARTED} ${port}`)
    })
    /**
     * @todo set env server timeouts
     */
  }
}

module.exports = AppServer;
