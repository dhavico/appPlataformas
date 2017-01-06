function Puerta(x, y,imagen) {
	Kinetic.Rect.call(this);
	this.setWidth(128);
	this.setHeight(128);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
}

Puerta.prototype = Object.create(Kinetic.Rect.prototype);