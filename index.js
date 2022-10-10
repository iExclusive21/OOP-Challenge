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
    const answers = await inquirer
    .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?" 
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID?" 
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?" 
        },
        {
            type: "list",
            message: "What is your role?", 
            name: "role", 
            choices: ["Engineer", "Intern", "Manager"],
        }
    ])
    if (answers.role === "Manager") {
        const officeNumAnswer = await inquirer
        .prompt([
            { 
                type: "input",
                message: "What is your office number",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            officeNumAnswer.officeNumber
        );
        newTeamMembers.push(newManager);
    
    } else if (answers.role === "Engineer"){
        const githubAnswer = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Github Username?",
            name: "github",
          }  
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAnswer.github
        );
        newTeamMembers.push(newEngineer);
    } else if (answers.role === "Intern"){
        const schoolAnswer = await inquirer
        .prompt([
            {
                type: "input",
                message: "What school did you attend?",
                name:"school",
            }
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            schoolAnswer.school
        );
        newTeamMembers.push(newIntern);
    }
};

async function promptQuestions(){
    await questions()

    const addMemberAnswers = await inquirer
    .prompt([
        {
            name: "addMember",
            type: "list", 
            choices: ["Add a new member", "Create team"], 
            message: "what would you like to do next?"
        }
    ])

    if (addMemberAnswers.addMember === "Add a new member"){
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions(); 

function createTeam(){
    fs.writeFileSync(
    "./website/index.html",
    generateWebsite(newTeamMembers),
    "utf-8"
    );
}
