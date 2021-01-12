const inquirer = require("inquirer");
async function ui() {
    const answers = inquirer.prompt([
        {
            message: "What is the name of your project?",
            name: "name",
        }, 
        {
            message: "What is the description of your project?",
            name: "description",
        },
        {
            message: "What are your installation instructions?",
            name: "installation",
        },
        {
            message: "How do you use your project?",
            name: "usage",
        },
        {  
            message: "How does someone contribute to your project?",
            name: "contribution",
        },
        {  
            message: "How do your conduct tests on your project?",
            name: "tests",
        },
        {  
            message: "What is your GitHub user name?",
            name: "github",
        },
        {  
            message: "What is your email address?",
            name: "email",
        },
        {  
            message: "Which license would you like to use?",
            name: "license",
            type: "list",
            choices: ["apache 2.0", "gnu gplv3", "MIT"],
        },
    ]);        
    return answers;
}

module.exports = ui;
