const sqlite3 = require('sqlite3').verbose();
let { insertUsers } = require('./sql/insertUsers');
let { createUsers } = require('./sql/createUsers');
let { createIndex } = require('./sql/createIndex');
let { createMessages } = require('./sql/createMessages');
let { insertMessages } = require('./sql/insertMessages');
let { insertMessageBFranklin } = require('./sql/insertMessageBFranklin');

function connect() {
  let db = new sqlite3.Database('./db/mydb.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });
  db.exec('PRAGMA foreign_keys = ON;', function(error)  {
    if (error){
        console.error("Pragma statement didn't work.")
    } else {
        console.log("Foreign Key Enforcement is on.")
    }
  });
  return db;
}

function init(db) {
  db.serialize(() => {
      db.run(createUsers, (err) => {
        if (err) { console.log(err) } else { console.log("Creating table users") }
      });
      db.run(createIndex, (err) => {
        if (err) { console.log(err) } else { console.log("Creating index") }
      });
      db.run(insertUsers, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting some user") }
      });
      db.run(createMessages, (err) => {
        if (err) { console.log(err) } else { console.log("Creating table messages") }
      });
      db.run(insertMessages, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting some messages") }
      });
      db.run(insertMessageBFranklin, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting some messages") }
      });
  });
}

module.exports = { connect, init }