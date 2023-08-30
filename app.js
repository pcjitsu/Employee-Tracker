const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

// Function to start the application
async function startApp() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"],
    },
  ]);

  //TODO: Add Logic for each scenario
  switch (action) {
    case "View all departments":
      viewAllDepts();
      break;
    case "View all roles":
      viewAllRoles();
      break;
    case "View all employees":
      viewAllEmployee();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployee();
      break;
    case "Exit":
      console.log("Goodbye!");
      process.exit();
  }
}

function viewAllDepts() {
  db.findDepartments().then(([departments]) => {
    console.table(departments);
    startApp();
  });
}

function viewAllRoles() {
  db.findRoles().then(([roles]) => {
    console.table(roles);
    startApp();
  });
}

function viewAllEmployee() {
  db.findEmployee().then(([employees]) => {
    console.table(employees);
    startApp();
  });
}
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "What is the new Department name?",
    })
    .then((name) => {
      db.addDepartment(name);
    })
    .then(() => {
      startApp();
    })
    .catch((err) => {
      return console.log(err);
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title?",
      },
      { type: "input", name: "salary", message: "What is the salary?" },
      { type: "input", name: "department_id", message: "What is the new department id?" },
    ])
    .then((role) => {
      db.addRole(role);
    })
    .then(() => {
      startApp();
    })
    .catch((err) => {
      return console.log(err);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name?",
      },
      { type: "input", name: "last_name", message: "What is the last name?" },
      { type: "input", name: "role_id", message: "What is the role id" },
      { type: "input", name: "manager_id", message: "What is the manager id" },
    ])
    .then((employee) => {
      db.addEmployee(employee);
    })
    .then(() => {
      startApp();
    })
    .catch((err) => {
      return console.log(err);
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      { type: "input", name: "newRoleId", message: "What is the new role id" },
      { type: "input", name: "emplyeeid", message: "What is the employee id" },
    ])
    .then((employee) => {
      db.updateEmployee(employee);
    })
    .then(() => {
      startApp();
    })
    .catch((err) => {
      return console.log(err);
    });
}
// Start the application
startApp();
