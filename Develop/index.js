// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
//const { writeFile, copyFile } = require('./utils/generate-site');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter the install directions for this project. (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('You need to enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the your usage informaion for this project. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter the usage information!');
            return false;
          }
        }
      },
      
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla', 'Apache', 'Boost']
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contibution guidelines for this project. (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('You need to enter the contribution guidelines for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions for this project. (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter the github username. (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('You need to enter the github username for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the contact email for this project. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project.!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Enter the deployed link for this project. (Required)',
        validate: deployedInput => {
          if (deployedInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project.!');
            return false;
          }
        }
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
