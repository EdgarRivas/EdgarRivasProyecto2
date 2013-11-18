function crearElemento(tipo, dui, texto){
	return $("<" + tipo + ">", {id: dui, text: texto});
}

function crearImagen(dui, url){
	return $("<img>", {id: dui, src: url});
}

function put(titus, objs){
	var cen = crearElemento("center", "", "");
	titus.append(crearElemento("div", "titulo", objs.taitle));
	titus.append(cen);
	cen.append(crearImagen("perfil", objs.image));
	titus.append(crearElemento("div", "contenido", objs.conten));
	titus.append(crearElemento("br", "", ""));
}

$(document).on("ready", function(){
	var titu = $("#enca");
	titu.append(crearElemento("div", "titulo", "Títulos de la saga"));
	titu.append(crearElemento("div", "contenido", "Creado con Objetos, sus propiedades y métodos. Cada episodio simboliza un Elder Scroll, es decir una especie de pergamino de cantidad de poder desconocido, donde quedan escritas las hazañas del jugador. Estos existen desde el primer Imperio creado. La tradición de este juego dicta que el héroe al cual da vida el jugador empiece como un simple prisionero, resultando liberado de una u otra forma en los primeros compases del juego. Esta libertad de acción para el jugador ha dado un gran renombre a esta serie."));
	////////////////////////////////////////////////
	var obj = new Object();
	obj.taitle = "1994 - TES I: Arena";
	obj.image = "../img/tes1/1.jpg";
	obj.conten = "El juego The Elder Scrolls: Arena fue creado para la plataforma MS-DOS (PC) y fue relanzado en 2004 como celebración del 10° aniversario. Fue criticado por sus malos gráficos, pero a la vez fue alabado por su jugabilidad, debido a ser el primer RPG con tanta libertad de juego por el escenario.";
	obj.poner = put;
	obj.poner(titu, obj);
	////////////////////////////////////////////////
	var obj = new Object();
	obj.taitle = "1996 - TES II: Daggerfall";
	obj.image = "../img/tes2/1.jpg";
	obj.conten = "La plataforma MS-DOS se mantuvo, ya que se uso en TES I, se mejora las gráficas y la jugabilidad no cambia mucho, pero su nueva historia cautiva a los jugadores y nuevamente es muy bien calificado como un gran juego.";
	obj.poner = put;
	obj.poner(titu, obj);
	////////////////////////////////////////////////
	var obj = new Object();
	obj.taitle = "2002 - TES III: Morrowind";
	obj.image = "../img/tes3/1.jpg";
	obj.conten = "La tercera entrega de The Elder Scrolls se llama Morrowind debido al lugar en el que se desarrolla: la provincia de Morrowind en Tamriel, se da un gran paso en los gráficos. Además lanza su primer título para consolas de videojuego. Es destinado para PC y XBOX y ahora es impulsado por el motor gráfico Gamebryo.";
	obj.poner = put;
	obj.poner(titu, obj);
	////////////////////////////////////////////////
	var obj = new Object();
	obj.taitle = "2002 - TES IV: Oblivion";
	obj.image = "../img/tes4/1.jpg";
	obj.conten = "Oblivion es la primera entrega que se basa en más de un motor gráfico, siendo 3 los motores gráficos que lo impulsan. Gamebryo, Havok y SppedTree son los motores que utiliza. Fue lanzado para la plataforma Windows, la consola Xbox 360 y Play Station 3 System. Además de lanzar versiones para móvil.";
	obj.poner = put;
	obj.poner(titu, obj);
	////////////////////////////////////////////////
	var obj = new Object();
	obj.taitle = "2002 - TES V: Skyrim";
	obj.image = "../img/tes5/1.jpg";
	obj.conten = "Siendo uno de los mejores juegos de 2011 demostro su supremasia como modelo para RPG, la cual tomo desde el lanzamiento de ARENA y hasta hoy porta. Fue lanzado para las plataformas: PS3, Xbox360, Windows. Como la tercera entrega (Morrowind), Skyrim porta el nombre de la provincia en la cual se desarrolla, siendo este el juego con el mapa más extenso de la saga.";
	obj.poner = put;
	obj.poner(titu, obj);
});