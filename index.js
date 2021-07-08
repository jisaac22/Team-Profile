// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Enginerr = require('./Engineer');
const Intern = require('./Intern');
const Enginer = require('./Engineer');

const team = [];

// prompt questions for Manager
function questions() {
  inquirer.prompt([
      {
          type:'input',
          message: "What is the team manager's name?",
          name: 'name'
      },
      {
          type: 'input',
          message: "What is the managers' id?",
          name: 'id',
      },
      {
          type: 'input',
          message: "What is the team manager's email?",
          name: 'email',
      },
      {
          type: 'input',
          message: "What is the team manager's office number?",
          name: 'office number',
      },
   ])
     .then(function (answers){
         let manager = new Manager(answers.name, answers.id, answers.emai, answers.OfficeNumber);
         team.push(manager)
         nextMember()
    })
     .catch(function(err){
         console.log(err);
    })
};
// function to chooce next member
    function nextMember(){
        let choice = 
        inquirer.prompt([
            {
                type: 'list',
                message:'Which type of member would you like to add?',
                choices: ['Engineer', 'Intern', 'I do not want to add anymore'],
                name: 'choice'
            }
        ]);
// if statement depending if choice is engineer these questions will be prompted
        if (choice.choice === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Engineers name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What us the Engineers id',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is the Engineers email',
                    email: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the Engineers Github?',
                    name: 'github',
                },
            ])
              .then(function(answers){
                  var engineer = new Enginer(answers.name, answers.id, answers.email, answers.github);
                  team.push(engineer)
                  nextMember()
            })
              .catch(function(err){
                  console.log(err);
              });    
        }
        else if (choice.choice === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Interns name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What us the Interns id?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is the Interns email?',
                    email: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the Interns School?',
                    name: 'school',
                },
            ])
             .then(function(answers){
                 var intern = new Intern(answers.name, answers.id, answers.emai, answers.school);
                 team.push(intern)
             })
             .catch(function(err){
                 console.log(err)
             });
        }
        else {createFile()}
} 

questions()

function createFile(){
    fs.writeFile()
}