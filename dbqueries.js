const sqlite3 = require('sqlite3').verbose();

function getUsers(db, req, res) {
    db.all(`SELECT * FROM users`, (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      if (!rows) {
        res.send({ error: "no messages found" })
      }
      let obj = { msgs: {} }
      rows.forEach(row => { obj.msgs[row.userId] = row })
    //   console.log(obj)
      res.send(obj);
    })
  }

module.exports = { getUsers }