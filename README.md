# SecureEnv CLI

**SecureEnv CLI** is a command-line tool designed to securely manage environment variables across different environments. It offers features for encrypting, decrypting, and managing environment variables, ensuring sensitive data is protected and environment-specific.

## Features

- **Switch Environment**: Easily switch between different environment files (e.g., `.env.development`, `.env.production`).
- **Encrypt**: Securely encrypt the currently active environment variables.
- **Decrypt**: Decrypt environment variables from the currently active environment file.
- **Set**: Add new environment variables to your `.env` file.
- **Get**: Retrieve the value of specific environment variables.

## Installation

Install globally using npm:

```bash
npm install -g secureenv-cli
```

## Usage Flow

### 1. Switch Environment

Before encrypting or decrypting, ensure that you switch to the correct environment. This command updates the active environment and prepares it for encryption or decryption.

```bash
secureenv-cli switch <env>
```

- Example:
  ```bash
  secureenv-cli switch development
  ```

This sets the active environment to `development`, so any subsequent encryption or decryption will apply to `.env.development`.

### 2. Encrypt Environment Variables

Encrypts the currently active environment file, such as `.env.development`, and creates an encrypted file named `.env.development.enc`.

```bash
secureenv-cli encrypt
```

### 3. Decrypt Environment Variables

Decrypts the environment file based on the active environment and restores the `.env.<environment>` file.

```bash
secureenv-cli decrypt
```

### 4. Set Environment Variable

Adds a new environment variable to the active `.env` file.

```bash
secureenv-cli set <key> <value>
```

- Example:
  ```bash
  secureenv-cli set API_KEY "newapikey123"
  ```

### 5. Get Environment Variable

Retrieves the value of a specified environment variable from the active `.env` file.

```bash
secureenv-cli get <key>
```

- Example:
  ```bash
  secureenv-cli get API_KEY
  ```

## Configuration

The following configurations are defined in `config.js`:

- **SUPPORTED_ENVS**: List of supported environments (e.g., `['development', 'production', 'staging']`).
- **DEFAULT_ENV_FILE**: Default environment file (e.g., `.env`).
- **ENCRYPTED_ENV_FILE_EXT**: File extension for encrypted environment files (e.g., `.enc`).

## License

This project is licensed under the MIT License.
