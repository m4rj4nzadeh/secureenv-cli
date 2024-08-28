import fs from 'fs';
import path from 'path';
import { DEFAULT_ENV_FILE } from '../config.js';

export function getEnvVar(key, filePath = DEFAULT_ENV_FILE) {
    const envPath = path.resolve(process.cwd(), filePath);
    const envContent = fs.readFileSync(envPath, 'utf8');
    const regex = new RegExp(`^${key}=(.*)$`, 'm');
    const match = envContent.match(regex);
    if (match) {
        console.log(`${key}=${match[1]}`);
    } else {
        console.log(`Environment variable ${key} not found in ${filePath}.`);
    }
}
