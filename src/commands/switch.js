import { fileExists, copyFile, writeFile } from '../utils/fileManager.js';
import { SUPPORTED_ENVS, DEFAULT_ENV_FILE } from '../config.js';
import path from 'path';

export function switchEnv(env) {
    if (!SUPPORTED_ENVS.includes(env)) {
        throw new Error(`Unsupported environment: ${env}. Supported environments are: ${SUPPORTED_ENVS.join(', ')}`);
    }

    const envFilePath = `.env.${env}`;
    const envDestPath = DEFAULT_ENV_FILE;

    if (!fileExists(envFilePath)) {
        throw new Error(`Environment file ${envFilePath} does not exist.`);
    }

    copyFile(envFilePath, envDestPath);

    // Optionally write the active environment to a config file
    writeFile('.active-env', env);

    console.log(`Switched to ${envFilePath} environment.`);
}
