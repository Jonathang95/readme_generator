// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the purpose and functionality of your project.'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: '"Please provide the relative path to the image you want to use as the screenshot.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'please select a license',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please list any installation requirements for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What steps do users need to follow to utilize your project.'
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Write your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors (Github username).',
        default: "",
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide guidelines for testing your project.'
    }

];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}


// TODO: Create a function to initialize app
function init() {  
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
