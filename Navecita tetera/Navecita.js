function Nave () {
  this.x = 0;
  this.y = 0;
  this.radius = 40;
  this.rotation = 0;
  this.showFlame = false;
}

Nave.prototype.draw = function (context) {
  var nave = new Image();
  nave.src = "Ratoncito.png";
  var naveflama = new Image();
  naveflama.src = "Ratoncito Flama.png";
  
  var naveWidth = 200;
  var naveHeight = 200;
  var flamaWidth = 200;
  var flamaHeight = 200;

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  // Pivote centrado en el nuevo tamaño
  context.drawImage(nave, -naveWidth / 2, -naveHeight / 2, naveWidth, naveHeight);

  if (this.showFlame) {
    context.drawImage(naveflama, -flamaWidth / 2, -flamaHeight / 2, flamaWidth, flamaHeight);
  }
  
  context.restore();
};