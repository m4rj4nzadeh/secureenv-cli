import { decrypt } from '../utils/crypto.js';
import { readFile, writeFile, readActiveEnv } from '../utils/fileManager.js';
import { getEncryptedFileName } from '../config.js';

export function decryptEnv() {
    const envName = readActiveEnv();
    const envFileName = envName ? `.env.${envName}` : '.env';
    const encryptedFileName = getEncryptedFileName(envName);

    const encContent = readFile(encryptedFileName);
    const decryptedContent = encContent.split('\n').map(line => {
        if (!line.includes('=') || line.trim() === '') {
            return line; // Skip invalid or empty lines
        }
        const [key, encryptedValue] = line.split('=');
        if (!encryptedValue) {
            throw new Error(`Encrypted value for key "${key}" is undefined. Please ensure all environment variables are correctly defined.`);
        }
        return `${key}=${decrypt(encryptedValue.trim())}`;
    }).join('\n');

    writeFile(envFileName, decryptedContent);
    console.log(`Environment variables decrypted and saved to ${envFileName}`);
}
