const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection(
  {
    host:   '127.0.0.1',
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "employee_db",
  },
  console.log(``)
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
