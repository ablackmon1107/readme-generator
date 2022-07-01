// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license !== 'no license') {
  return `
![badge](https://img.shields.io/badge/license-${license}-blue)
  `;
} else {
  return ' ';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![badge](https://img.shields.io/github/license/${data.githubUsername}/${data.title})

  # ${data.title}


  ## Description
  ${data.description}

  ## Contributing
  ${data.contributions}

  ## Table of Contents
  [Description](#description)
  [Contributing](#contributions)
  [Installation](#install)
  [Usage](#usage)
  [Tests](#testing)
  [License](#license)
  [Questions/Connect](#questions/connect)

  ## Install 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Testing
  ${data.testing}



  ## License
  *This application is covered under the ${data.license} license.


  ## Questions/Connect
  Developed by:[${data.github}](${data.repo})
  
  I would love to connect, reach out at [${data.email}]

`;
}

module.exports = generateMarkdown;
