//inquirer for prompts
const inquirer = require('inquirer');
// require file systems
const fs = require('fs');
// team member libraries 
const Engineer = require ('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
// Generate the website
const generateWebsite = require('./source/website');
//push object into array 
const newTeamMembers = [];

const questions = async() => {
    const answers = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your Manager's name?" 
        },
        {
          type: "input",
          name: "id",
          message: "What is your Manager's ID?" 
        },
        {
          type: "input",
          name: "email",
          message: "What is your Manager's email?" 
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your Manager's office number?" 
        },
        {
            type: "list"
            message: "What is your role?", 
            name: "role", 
            choices: ["Engineer", "Intern", "Manager"],
        }
    ])

}
