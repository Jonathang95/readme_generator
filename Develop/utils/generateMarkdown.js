// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost1.0': 'https://opensource.org/licenses/BSL-1.0',
    'MPL2.0': 'https://opensource.org/licenses/MPL-2.0',
    'BSD2': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD3': 'https://opensource.org/licenses/BSD-3-Clause',
  }; if (license!== "none") {
  return `![Github license](${licenseURLs[license]})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license!== "none") {
    return `## License 
    This application is covered under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Installation
${data.installation}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.tests}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}
module.exports = generateMarkdown
