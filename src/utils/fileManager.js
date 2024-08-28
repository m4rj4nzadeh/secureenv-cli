import fs from 'fs';
import path from 'path';

export function readFile(filePath) {
    try {
        const absolutePath = path.resolve(process.cwd(), filePath);
        return fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
        throw new Error(`Failed to read file at ${filePath}: ${err.message}`);
    }
}

export function writeFile(filePath, content) {
    try {
        const absolutePath = path.resolve(process.cwd(), filePath);
        fs.writeFileSync(absolutePath, content, 'utf8');
        console.log(`File written successfully at ${filePath}`);
    } catch (err) {
        throw new Error(`Failed to write file at ${filePath}: ${err.message}`);
    }
}

export function fileExists(filePath) {
    const absolutePath = path.resolve(process.cwd(), filePath);
    return fs.existsSync(absolutePath);
}

export function copyFile(sourcePath, destPath) {
    try {
        const sourceAbsolutePath = path.resolve(process.cwd(), sourcePath);
        const destAbsolutePath = path.resolve(process.cwd(), destPath);
        fs.copyFileSync(sourceAbsolutePath, destAbsolutePath);
        console.log(`File copied from ${sourcePath} to ${destPath}`);
    } catch (err) {
        throw new Error(`Failed to copy file from ${sourcePath} to ${destPath}: ${err.message}`);
    }
}

export function readActiveEnv() {
    if (fileExists('.active-env')) {
        return readFile('.active-env').trim();
    }
    return '';
}

