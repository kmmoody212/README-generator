// Packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./generateMarkdown.js";

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you use this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the steps to installing your project?",
    name: "installation",
  },
  {
    type: "list",
    message: "Please select a license.",
    name: "license",
    choices: ["MIT", "Apache 2.0", "BSD 3-Clause"],
  },
];

// Function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("README file created successfully!");
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  } catch (error) {
    console.error("Error initializing the app", error);
  }
}

// Function call to initialize app
init();
