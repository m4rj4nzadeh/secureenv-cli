#!/usr/bin/env node

import { encryptEnv } from './commands/encrypt.js';
import { decryptEnv } from './commands/decrypt.js';
import { setEnvVar } from './commands/set.js';
import { getEnvVar } from './commands/get.js';
import { switchEnv } from './commands/switch.js';
import { program } from 'commander';

program
    .command('encrypt')
    .description('Encrypt the currently active environment variables')
    .action(() => {
        encryptEnv();
    });

program
    .command('decrypt')
    .description('Decrypt the currently active environment variables')
    .action(() => {
        decryptEnv();
    });

program
    .command('set <key> <value>')
    .description('Set an environment variable')
    .option('-f, --file <path>', 'Path to .env file', '.env')
    .action((key, value, cmd) => {
        setEnvVar(key, value, cmd.file);
    });

program
    .command('get <key>')
    .description('Get an environment variable')
    .option('-f, --file <path>', 'Path to .env file', '.env')
    .action((key, cmd) => {
        getEnvVar(key, cmd.file);
    });

program
    .command('switch <env>')
    .description('Switch to a specific environment')
    .action((env) => {
        switchEnv(env);
    });

program.parse(process.argv);
