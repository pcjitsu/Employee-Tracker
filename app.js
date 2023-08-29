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
      break;
    case "Update an employee role":
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
    .then((title, salary, department_id) => {
      db.addRole(title, salary, department_id);
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
