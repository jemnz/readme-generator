// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/license-${data.license}-blue)

This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
