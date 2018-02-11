var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3001);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
//  db.connection.query('SELECT * FROM Messages ', 
//   (error, results, fields) =>{
//         if (error) {
//           console.log(`error: ${error}`);
//         } if (results) {
//             console.log(`results: ${JSON.stringify(results,null, 2)}`)
//             console.log(`fields: ${JSON.stringify(fields, null, 2)}`)
//           return results;
//         }
//  });

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {

  app.listen(app.get('port'));

  console.log('Listening on', app.get('port'));
}

