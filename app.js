const exp = function() {
  while(true) {
    console.log("started");
    exp();
  }
}
console.log("Started");
exp();
