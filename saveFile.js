const fs = require("fs");

async function saveFile (str, filePath = "dist/README.md") {
    return fs.writeFileSync(filePath, str);
}

module.exports = saveFile;