const sqlite3 = require('sqlite3').verbose();

function connect() {
  // create a database based on the db/database file
  let db = new sqlite3.Database('./db/database.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });
  return db;
}

function init(db) {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (userId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);', (err) => {
        if (err) { console.log(err) } else { console.log("Creating Table Users") }
        });
        db.run('INSERT INTO users (name) VALUES ("Katia"), ("Mike")', (err) => {
            if (err) { console.log(err) } else { console.log("Inserting some user") }
        });
    });
}

module.exports = { connect, init }

