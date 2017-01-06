function Game(){
	this.estado = 'antes';
	this.puntaje = 0;
	this.llave = false;
	this.nivel = 1;
}
Enemigo.prototype = Object.create(Kinetic.Rect.prototype);