const connection = require("./connection");
const inquirer = require("inquirer");
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findDepartments() {
    return this.connection.promise().query("SELECT * FROM department;");
  }
  findRoles() {
    return this.connection.promise().query("SELECT * FROM role;");
  }
  findEmployee() {
    return this.connection.promise().query("SELECT * FROM employee;");
  }
  addDepartment(name) {
    return this.connection.promise().query("INSERT INTO department SET ?", name);
  }
  addRole(title, salary, departmentId) {
    return this.connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);", [title, salary, departmentId]);
  }
}

module.exports = new DB(connection);

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
