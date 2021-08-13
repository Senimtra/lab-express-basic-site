// ### Require express package ###
const express = require('express');

// ### Require chalk package ###
const chalk = require('chalk');

// ### Create express server app ###
const app = express();

// ### Start app server ###
const server = app.listen(3000, () => {
   console.log('Server is listening on port ' + chalk.yellow(server.address().port) + '...')
});
