function Heroe(imagen){
	Kinetic.Rect.call(this);
	this.setWidth(64);
	this.setHeight(64);
	this.vx = 15;
	this.vy = 0;
	this.limiteDer = 0;
	this.limiteTope = 0;
	this.direccion = 1;
	this.contador = 0;
	this.setFillPatternImage(imagen);
	this.caminar = function(){
		console.log(this.vx);
		this.move({x: this.vx,y:0});
		if(this.getX() > this.limiteDer) this.move({ x: this.limiteDer - this.getX(), y: 0});
	},
	this.retroceder = function(){
		this.move({x: -15,y:0});
		if(this.getX() < 0) this.move({ x: -this.getX(), y: 0 });
	},
	this.saltar = function(){
		this.vy = -20;
		this.contador++;
	},
	this.aplicarGravedad = function(gravedad, vRebote){
		this.vy += gravedad;
		this.move({x:0,y:this.vy});
		if((this.getY() + this.getHeight()) > this.limiteTope){
			this.setY(this.limiteTope - this.getHeight());
			this.vy = 0;
			this.contador = 0;
		}
	}
}

Heroe.prototype = Object.create(Kinetic.Rect.prototype);