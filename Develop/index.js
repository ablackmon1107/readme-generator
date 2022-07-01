// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
      
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
    },

    {
        type: "input",
        name: "github",
        message: "What is your Github name?"
    },

    {
        type: "input",
        name: "repo",
        message: "What is the name of your Github repository?"
    },

    {
        type: "input",
        name: "description",
        message: "Can you describe your application?"
    },
    
    {
        type: "input",
        name: "install",
        message: "What is the installation process for your application?"
    },
    
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },

    {
        type: "input",
        name: "contributions",
        message: "Who contributed to your application?"
    },
    {
        type: "input",
        name: "testing",
        message: "How can your application be tested?"
    },

    {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },
  
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
        
];
    

// TODO: Create a function to write README file
inquirer.prompt([questions], function(answers){


function writeToFile(fil, data) {fs.writeFile('README.md', markdownString, function(err) {
    if(err) {
        console.log(err)
    
    else {
        console.log('Check out your new README.md')
    }
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([questions] ,function(answers)
};

// Function call to initialize app
init();
