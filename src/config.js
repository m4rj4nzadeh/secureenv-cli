export const SUPPORTED_ENVS = ['development', 'production', 'staging'];

export const DEFAULT_ENV_FILE = '.env';
export const ENCRYPTED_ENV_FILE_EXT = '.enc';

// Function to return the encrypted file name based on the environment
export const getEncryptedFileName = (env) => {
    return env ? `.env.${env}${ENCRYPTED_ENV_FILE_EXT}` : `.env${ENCRYPTED_ENV_FILE_EXT}`;
};
