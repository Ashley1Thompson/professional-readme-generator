// requiring packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');
//An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of Readme'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions',
  },  
  {
    type: 'input',
    name: 'usage',
    message: 'How to use',
  },  
  {
    type: 'input',
    name: 'features',
    message: 'List the project features',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List contributers',
  },  
  {
    type: 'list',
    name: 'license',
    message: 'License?',
    choices: ['MIT','GNU','ISC','Mozilla','None'],
  },  
  {
    type: 'input',
    name: 'tests',
    message: 'List Testing for project',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username (case sensitive)',
  },

];

// A function to generate the Readme file when all inquirer prompts are answered
function init() {
  inquirer.prompt(questions).then(data => {
    fs.writeFileSync('readme.md', generateMarkdown(data))
  })
}

init();
