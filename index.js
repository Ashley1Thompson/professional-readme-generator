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
    name: 'credits',
    message: 'description of project',
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
    message: 'description of project',
  },
  {
    type: 'input',
    name: 'email',
    message: 'description of project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'description of project',
  },

];

function init() {
  inquirer.prompt(questions).then(data => {
    fs.writeFileSync('readme.md', generateMarkdown(data))
  })
}

init();
