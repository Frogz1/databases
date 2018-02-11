var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {  
      db
        .connection
        .query('SELECT * FROM Messages ', callback);
    }, // a function which produces all the messages
    post: function (message, callback) {
      db
        .connection
        .query(`INSERT INTO Messages (userid, text) VALUES (${message.userid},'${message.text}')`, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      db
        .connection
        .query(`SELECT id FROM Users WHERE name = '${username}' `, callback);
    },
    post: function (username, callback) {
      db
        .connection
        .query(`INSERT INTO Users (name) VALUES ('${username}')`, callback);
    }
  }
};

