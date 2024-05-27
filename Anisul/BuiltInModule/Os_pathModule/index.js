// os module
// const os = require("os");
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// path module
// console.log(__dirname);
// console.log(__filename);

const path = require("path");

// const extensionName = path.extname("index.heml");
// console.log(extensionName);

const joinName = path.join(__dirname + "/../../views");
console.log(joinName);