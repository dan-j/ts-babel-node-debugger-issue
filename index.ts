const path = require('path');

function parentDir(filepath: string) {
    return path.resolve(filepath, '../');
}

const here = path.resolve();

console.log(`parent directory of here is: ${parentDir(here)}`);

