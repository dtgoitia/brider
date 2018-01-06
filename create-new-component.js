const readline = require('readline');
const fs = require('fs');
const path = require('path');

/**
 * Wrapper to create a file, write it and handle errors
 * @argument {string} path - File path.
 * @argument {string} data - Content to be written within the file.
 */
function createFile(path, data) {
  fs.writeFile( path, data, (err) => {
      if (err) throw err;
      console.log(`Create file ${path}`);
  });
}

/**
 * Checks if the directory exists
 * @param {string} base - Directory path.
 * @return {boolean} True if exists, false if doesn't exist.
 */
function checkComponentExists(base) {
  try {
    return fs.statSync(base).isDirectory();
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false;
    } else {
      throw e;
    }
  }
}

/**
 * Set first character as lowercase
 * @param {string} s - String to modify
 * @return {string} Modified string
 */
function firstCharToLowercase(s) {
  return s[0].toLowerCase() + s.slice(1);
}

/**
 * Create a React component folder with basic JS and CSS files within "./src/components"
 * @param {string} name - Component name.
 */
function createReactComponent(name){
  const base = path.resolve(__dirname, './src/components/', name);
  
  if (checkComponentExists(base)) {
    console.log(`Looks like the component \"${name}\" alredy exists... operation aborted.`)
  } else {
    const file = path.resolve(base, name);
    const component = file + '.js';
    const css = file + '.css';
    // const test = file + '.test.js';

    const componentData = `import React, { Component } from 'react';`
      +`\n`
      +`\nimport './${name}.css';`
      +`\n`
      +`\nclass ${name} extends Component {`
      +`\n  render() {`
      +`\n    return (`
      +`\n      <div className="${firstCharToLowercase(name)}">`
      +`\n        I'm your new component "${name}"!`
      +`\n      </div>`
      +`\n    );`
      +`\n  }`
      +`\n}`
      +`\n`
      +`\nexport default ${name};`
    ;
    const cssData = `.${firstCharToLowercase(name)} { }`;

    // Create folder and files
    console.log(`Create directory ${base}`);
    fs.mkdir(base, (e) => {
      if (e) {
        throw e;
      } else {
        createFile(component, componentData);
        createFile(css, cssData);
      }
    });
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user to input component name
rl.question('Component name? ', (answer) => {
  answer
    ? createReactComponent(answer)
    : createReactComponent('UntitledComponent')
  rl.close();
});

