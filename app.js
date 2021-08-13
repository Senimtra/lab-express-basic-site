// ### Require express package ###
const express = require('express');

// ### Require chalk package ###
const chalk = require('chalk');

// ### Create express server app ###
const app = express();

// ### Serve static files in public ###
app.use(express.static('public'));

// ### Route home-page ###
app.get('/', (request, response) => {
   response.sendFile(__dirname + '/views/home-page.html');
});

// ### Route cases-page ###
app.get('/cases', (request, response) => {
   response.sendFile(__dirname + '/views/cases-page.html');
});

// ### Route about-page ###
app.get('/about', (request, response) => {
   response.sendFile(__dirname + '/views/about-page.html');
});

// ### Route gallery-page ###
app.get('/gallery', (request, response) => {
   response.sendFile(__dirname + '/views/gallery-page.html');
});

// ### Route fall-back ###
app.get('*', (request, response) => {
   response.redirect(301, '/');
   console.log('Redirecting to ' + chalk.red('root') + '...');
});

// ### Start app server ###
const server = app.listen(3000, () => {
   console.log('Server is listening on port ' + chalk.yellow(server.address().port) + '...')
});
