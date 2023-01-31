// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Apache license 2.0") {
    return '![Apache](https://img.shields.io/badge/license-Apache%202.0-brightgreen)'
  }
  else if (license==="BSD 3-clause Clear license") {
    return '![BSD 3](https://img.shields.io/badge/license-BSD%203.0-yellow)'
  }
  else if (license==="GNU General Public License v3.0") {
    return '![GNU 3](https://img.shields.io/badge/license-GNU%203.0-orange)'
  }
  else if (license==="MIT") {
    return '![MIT](https://img.shields.io/badge/license-MIT-blue)'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='None'){
    return ''
  }
  else {
    return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='None'){
    return ''
  }
  else {
    return `### License
This project is licensed under ${license}; for more information visit [opensource.org](https://opensource.org/licenses)
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
${renderLicenseLink(data.license)}
### Description
${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
