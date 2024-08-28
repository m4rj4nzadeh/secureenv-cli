import { readFile, writeFile, readActiveEnv } from '../utils/fileManager.js';
import { encrypt } from '../utils/crypto.js';
import { getEncryptedFileName } from '../config.js';

export function encryptEnv() {
    const envName = readActiveEnv();
    const envFileName = envName ? `.env.${envName}` : '.env';

    const encryptedFileName = getEncryptedFileName(envName);

    const envContent = readFile(envFileName);

    const encryptedContent = envContent.split('\n').map(line => {
        if (!line.includes('=') || line.trim() === '') {
            return line; // Skip invalid or empty lines
        }
        const [key, value] = line.split('=');
        if (!value) {
            throw new Error(`Value for key "${key}" is undefined. Please ensure all environment variables are correctly defined.`);
        }
        return `${key}=${encrypt(value.trim())}`;
    }).join('\n');

    writeFile(encryptedFileName, encryptedContent);
    console.log(`Environment variables from ${envFileName} encrypted and saved to ${encryptedFileName}`);
}
