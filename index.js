const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

// index.js

clear();

console.log(
  chalk.yellow(
    figlet.textSync('CoreTuxEngineering', { horizontalLayout: 'full' })
  )
);

//index.js

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git repository!'));
  process.exit();
}