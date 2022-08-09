// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ``
  }
};

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU') {
    return `[GNU License](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'ISC') {
    return `[ISC License](https://opensource.org/licenses/ISC)`
  } else if (license === 'Mozilla') {
    return `[Mozilla License](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ``
  }
};

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)  
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
##Features
${data.features}
## Credits
${data.credits}
## License
${data.license}
## Testing
${data.tests}
## Questions
For any questions please email me at ${data.email}
or reach me on GitHub github.com/${data.github}
`;
}

module.exports = generateMarkdown;
