// ### Require express package ###
const express = require('express');

// ### Require chalk package ###
const chalk = require('chalk');

// ### Create express server app ###
const app = express();

// ### Serve static files in public ###
app.use(express.static('public'));

// ### Route cases-page ###
app.get('/cases', (request, response) => {
   response.send('cases-page');
});

// ### Route about-page ###
app.get('/about', (request, response) => {
   response.send('about-page');
});

// ### Route gallery-page ###
app.get('/gallery', (request, response) => {
   response.send('gallery-page');
});

// ### Route home-page/fall-back ###
app.get('*', (request, response) => {
   response.send('home-page');
});

// ### Start app server ###
const server = app.listen(3000, () => {
   console.log('Server is listening on port ' + chalk.yellow(server.address().port) + '...')
});
