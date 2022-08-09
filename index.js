// requiring packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of Readme'
  },
  {
    type: 'input',
    name: 'description',
    message: 'description of project',
  },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
    fs.writeFileSync('readme.md', generateMarkdown(data))
  })
}

// Function call to initialize app
init();
