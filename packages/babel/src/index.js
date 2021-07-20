
const hello = require("./lib/hello");
import world from "./lib/world";

console.log(hello(), world());

export {
  hello,
  world,
};
