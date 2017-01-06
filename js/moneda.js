function Moneda(x, y,imagen) {
	Kinetic.Rect.call(this);
	this.setWidth(30);
	this.setHeight(30);
	this.setX(x);
	this.setY(y);
	this.setFillPatternImage(imagen);
}

Moneda.prototype = Object.create(Kinetic.Rect.prototype);