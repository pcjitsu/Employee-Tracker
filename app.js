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
      break;
    case "Add a department":
      break;
    case "Add a role":
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

  function viewAllRoles() {
    db.findRoles().then(([roles]) => {
      console.table(roles);
      startApp();
    });
  }
}

// Start the application
startApp();
