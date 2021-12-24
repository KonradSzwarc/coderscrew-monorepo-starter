const { Option } = require('commander');
const { runCommand } = require('../utils');

async function action(options) {
  let command = 'eslint --format=pretty "**/*.{js,ts,tsx}"';

  if (options.cache) {
    command = `${command} --cache`;
  }

  if (options.timing) {
    command = `cross-env TIMING=${options.timing} ${command}`;
  }

  runCommand(command);
}

module.exports = (program) => {
  program
    .command('lint')
    .description('Runs linter across all files.')
    .addOption(new Option('--no-cache', 'Clear ESLint cache before running the script.'))
    .addOption(new Option('--timing [count]', 'Show timing for [count] longest rules.'))
    .action(action);
};
