import fs from 'fs';
import path from 'path';
import { DEFAULT_ENV_FILE } from '../config.js';

export function setEnvVar(key, value, filePath = DEFAULT_ENV_FILE) {
    const envPath = path.resolve(process.cwd(), filePath);
    fs.appendFileSync(envPath, `\n${key}=${value}`);
    console.log(`Environment variable ${key} set successfully in ${filePath}.`);
}
