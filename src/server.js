const AppServer = require('../app');

const appServer = new AppServer();

/**
 * Fetch Port from env later
 */
appServer.start(3000)