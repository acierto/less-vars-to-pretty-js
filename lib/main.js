import fs from 'fs';
import {pretty} from 'js-object-pretty-print';

export const lessToJs = (lessFile) => {
    const lessVars = {};
    const matches = lessFile.match(/@(.*:[^;]*)/g) || [];

    matches.forEach((variable) => {
        const definition = variable.split(/:\s*/);
        const rawKey = definition[0].substring(1);
        const key = rawKey.includes('-') ? `"${rawKey}"` : rawKey;
        lessVars[key] = definition[1];
    });

    const sortedKeys = Object.keys(lessVars).sort();
    const sortedLessVars = {};

    sortedKeys.forEach((sortedKey) => {
        sortedLessVars[sortedKey] = lessVars[sortedKey];
    });

    return `module.exports = ${pretty(sortedLessVars)}`;
};

export const generateJsFile = (lessFile, destFile) => new Promise((resolve, reject) => {
    const fileContent = lessToJs(lessFile);
    fs.writeFile(destFile, fileContent, (err) => {
        if (err) {
            reject(err);
        }
        resolve();
    });
});
