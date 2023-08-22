const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "",
  },
  console.log(``)
);

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

  switch (action) {
    case "View all departments":
      break;
    case "View all roles":
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

// Start the application
startApp();
