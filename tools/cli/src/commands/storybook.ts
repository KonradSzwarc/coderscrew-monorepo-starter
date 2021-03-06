import { Argument, Command } from 'commander';

import { workspacesUtils } from '@ccms/node';

import { loadEnvVariables, runCommand } from '../utils';

export const STORYBOOK_WORKSPACE = workspacesUtils.findOneOrThrow('ui');
export const storybookCommands = {
  dev: 'storybook-dev',
  build: 'storybook-build',
  synchronize: 'zeplin-connect',
  'synchronize-dev': 'zeplin-connect-dev',
};

interface Arguments {
  script: keyof typeof storybookCommands;
}

function action(script: Arguments['script']) {
  loadEnvVariables();

  runCommand(`pnpm run ${storybookCommands[script]} --filter=${STORYBOOK_WORKSPACE.moduleName}`);
}

export const storybookCommand = (program: Command) => {
  program
    .command('storybook')
    .description('Runs Storybook related scripts.')
    .addArgument(new Argument('<script>', 'Script to run for the Storybook').choices(Object.keys(storybookCommands)))
    .action(action);
};
