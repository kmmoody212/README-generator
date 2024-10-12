// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3-Clause") {
    return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This project is licensed under the ${license} license.`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}`;
}

export default generateMarkdown;
