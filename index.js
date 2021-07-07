// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

const questions =
  inquirer.prompt([
      {
          message: 'Please build your team',
          name: 'message'
      },
      {
          type:'input',
          message: "What is the team member's name?",
          name: 'managers name'
      },
      {
          type: 'input',
          message: "What is the managers' id?",
          name: 'managers id',
      },
      {
          type: 'input',
          message: "What is the team manager's email?",
          name: 'managers email',
      },
      {
          type: 'input',
          message: "What is the team manager's office number?",
          name: 'managers email',
      },
  ]);