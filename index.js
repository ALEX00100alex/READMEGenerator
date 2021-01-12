const ui = require("./ui.js");
const generate = require("./markdown.js");
const saveFile = require("./saveFile.js");
async function main (){
    console.log("Welcome to the README Generator App!");
    const answers = await ui();
    const dataString = await generate (answers);
    const saveSuccess = await saveFile(dataString);
    console.log(saveSuccess);
    console.log("Thank you for using this README Generator!");
}

main();

