const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests:',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


