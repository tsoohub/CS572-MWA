function musician(name) {
    this.name = name;
}

musician.prototype.play = function(piece) {
    console.log(this.name +' is playing '+piece);
}

var violinist = new musician("Tsoodol");
var pianist = new musician("Asaad");

violinist.play("piano");
pianist.play("violin");
