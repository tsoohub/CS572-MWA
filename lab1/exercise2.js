String.prototype.filterWords = function(words) {
  let own = this;
  for(const w of words) {
    own = own.replace(w, "****");
  }
  return own;
}
console.log("This house is nice!".filterWords(['house', 'nice']));
