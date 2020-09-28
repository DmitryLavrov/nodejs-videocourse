const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", `${message} ${Date.now()}`);
  }
}

const logger = new Logger();

logger.on("message", (data) => {
  console.log(data);
});

logger.log("Hello");
logger.log("Hello");
logger.log("Hello");

// const event = new EventEmitter();

// event.on("m1", (data) => {
//   console.log(data);
// });

// event.emit("m1", `Hello! ${Date.now()}`);
// event.emit("m1", `Hello! ${Date.now()}`);
// event.emit("m1", `Hello! ${Date.now()}`);
