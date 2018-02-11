var models = require('../models');
var mysql = require('mysql');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          console.log(err);
        } else {
          var results = {
            'results': data
          };
          res.send(results);
        }
      });
    },
    //   
    post: function (req, res) {
      // console.log(req.body);
      models.users.get(req.body.username, (err, data)=>{
        if (err) {
          console.log(err);
          console.log('creating new user');

        } else {
          if (data.length < 1) {
            models.users.post(req.body.username, (err, data) => {
              if (err) {
                console.log('user creation failure');
              } else {
                console.log(data);
                //res.send(data);
              }
            });          
          }
          var results = {
            'results': data
          }; 
          // console.log(results);
          var msg = {
            'userid': results.results[0].id,
            'text': req.body.text
          };
          models.messages.post(msg, (err, data)=>{
            console.log(msg);
            if (err) {
              console.log(err);
            } else {
              res.send(data);
            }
          });
          // res.send(results);
        }
      });
        
    }
    
   
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var username = req.param('name');
      if (username.length) {

      }

      models.users.get(username, (err, data) => {
        if (err) {
          console.log(err);
          console.log('creating new user');

        } else {
          if (data.length < 1) {
            models.users.post(username, (err, data) => {
              if (err) {
                console.log('user creation failure');
              } else {
                console.log(data);
                //res.send(data);
              }
            }); 
              
          }
          var results = {
            'results': data
          }; 
          res.send(results);
        }
      });
    },
    post: function (req, res) {}
  }
};




// db.connection.query('SELECT * FROM Messages ', 
//         (error, results, fields) =>{
//           if (error) {
//             console.log(`error: ${error}`);
//           } if (results) {
//             // console.log(`results: ${JSON.stringify(results, null, 2)}`);
//             // console.log(`fields: ${JSON.stringify(fields, null, 2)}`);
//             res.send(results);
//           }
//         });
//     }, // a function which handles a get request for all messages