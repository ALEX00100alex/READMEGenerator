// {"name":"1","description":"1","installation":"1","usage":"1","contribution":"1","tests":"1","github":"1","email":"1","license":"apache 2.0"}
async function generate(data) {
    let license;
    switch (data.license){
        case "apache 2.0":
            license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break; 
        case "gnu gplv3":
            license =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"; 
            break;           
        case "MIT":
            license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;   
    }         
    let md = `
# ${data.name}  

${license} 

## Table of Contents 
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contribution](#Contribution)
[Tests](#Tests)
[GitHub](#GitHub)
[Email](#Email)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## GitHub
${data.github}

## Email
${data.email}

    `;

    return md;
}
module.exports = generate;