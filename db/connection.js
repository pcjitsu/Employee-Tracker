const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "OLDsalty89!@Boom",
    database: "employee_db",
  },
  console.log(``)
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
