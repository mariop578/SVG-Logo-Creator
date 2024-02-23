// SVG
// Inquirer prompts for shapes and Text
// Shapes - Circle, Triangle and Square --Color (key code or hexdecimal)
// Text -- Up to 3 characters--Color(key code color or hexdecimal)

// Create a class for the 3 shapes

//Shapes.js is for classes for shape svg to make 3 shape objects

// index.js is to init the app it should have the following functions
// Prompt for options
// Create SVG

// Imports
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape.",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "color",
    message: "Enter a color by name or hexidecimal.",
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 letters to include in the logo.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color for the text by name or hexidecimal.",
  },
];

// Function to start app by prompting questions and execute writeToFile function
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const inputShape = answers;
    writeToFile("./distro/logo.svg", inputShape);
  });
}

// Function to write to file using fs also cleans up user answers to concatenate an SVG string.
function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";

  let shapeChoice;

  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.color}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.color}"/>`;
  }
  console.log(answers.shape);
  const text = answers.text;
  const capitalText = text.toUpperCase();

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${capitalText}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

init();
