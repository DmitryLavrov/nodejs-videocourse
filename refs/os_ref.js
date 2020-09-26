const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus()[0].model);
console.log(os.freemem() / 1024 / 1024, "Mb");
console.log(os.totalmem() / 1024 / 1024, "Mb");
console.log(os.homedir());
console.log(os.uptime() / 60 / 60, " час.");
