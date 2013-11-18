var titulos = new Array();
var contenidos = new Array();
var imagenes = new Array();
window.onload = function(){
	var titus = document.getElementById("enca");
	titulos.push("The Elder Scrolls: Arena (1994)");
	titulos.push("The Elder Scrolls II: Daggerfall (1996)");
	titulos.push("The Elder Scrolls III: Morrowind (2002)");
	titulos.push("The Elder Scrolls IV: Oblivion (2006)");
	titulos.push("The Elder Scrolls V: Skyrim (2011)");
	titulos.push("The Elder Scrolls: Online (2014)");
	contenidos.push("Aquí se iniciaba la historia del imperio de Uriel Septim VII. El joven emperador era traicionado por un mago guerrero de la corte llamado Jagar Tharn. Este traidor envía al emperador a una extraña dimensión creada por él mismo, y aprovecha para suplantar su identidad, iniciando así un reinado oscuro. Nuestra misión será ejercer el papel de enviado de los dioses para desenmascarar al falso emperador y rescatar al auténtico Uriel Septim.");
	contenidos.push("En la segunda entrega nuestro personaje es enviado a la Provincia de High Rock, la parte más occidental de Tamriel y tierra natal de los Bretones y Orcos. Estamos allí por orden directa del mismísimo Uriel Septim para cumplir dos objetivos: llevar una carta a un Cuchilla (caballero al servicio del emperador) de la corte de la ciudad de Daggerfall, y liberar a un rey fantasma cuyas intenciones desconocemos en un principio. La situación se complica cuando el Cuchilla nos invita a ayudarle en la búsqueda de una llave para resucitar al Numidium, un extraño robot gigante que guarda un gran poder para el imperio. El juego es el más extenso de todos, tanto por la línea argumental como por el mapeado (High Rock posee, al menos, el doble de tamaño del Reino Unido). Era mucho más profundo que Arena, y aumentaban los detalles roleros. Nos presentaba también unos vivos escenarios en 2.5D muy buenos para la época. Disponía de miles de mazmorras y cuevas para visitar, y más de 750.000 personajes con los que interactuar, desde pueblerinos hasta caballeros. El juego podía ser excesivamente extenso para un jugador novato. Además esta entrega añadía cinco finales distintos.");
	contenidos.push("Esta entrega que atrajo más jugadores gracias a la profundidad de su trama. En las tierras de Morrowind, más concretamente en el Gran Ducado de Vvardenfell, un antiguo mal resurge. Dagoth-Ur, un malvado dios que había sido combatido antaño por las Casas Chimer (Bajos Elfos, predecesores de los Dunmer o Elfos Oscuros), había vuelto de su largo sueño. Todos sus aliados y seguidores se preparaban para volver a servir a su amo. La gente temía por su vida y no había esperanza. Por suerte, llega nuestro personaje a la isla. No sabe ni quién es ni de donde viene. Poco a poco descubrirá que es el Nerevarine (quien posee el alma de Nerevar Indoril, el único capaz de derrotar a Dagoth-Ur en el pasado) para combatir la maldad de Dagoth-Ur y los siete vampiros que le servían.");
	contenidos.push("Se desarrolla en Cyrodiil (la Provincia central del Imperio de Tamriel), CIudad Imperial (la capital del Imperio de Tamriel) y en parte de Deadlands (plano de Oblivion perteneciente a Mehrunes Dagon), lugar de los Daedra. Recibiremos la visita del mismísimo Uriel Septim en nuestra celda, que nos dirá que somos los elegidos para salvar a Tamriel de la invasión Daedra, proveniente de Oblivion (el plano donde residen los príncipes Daédricos). Tras esas palabras, seremos testigos de la muerte del emperador a manos de una extraña hermandad llamada el Amanecer Mítico. A partir de aquí nuestro personaje iniciará una gran aventura para cerrar las puertas de Oblivion y encontrar al heredero del trono de Tamriel para destruir al Amanecer Mítico. El mundo vuelve a ser gigantesco, con unas majestuosas ciudades cada una con su propia historia y problemas. Su gran calidad gráfica, con unos escenarios muy variados y los diversos gremios dan mucha variedad al juego. Fue coronado Game of the Year de 2006");
	contenidos.push("Lanzado por Bethesda Softworks el 11-11-11 (11 de Noviembre de 2011), The Elder Scrolls V nos lleva a la tierra que es cuna y hogar de los nórdicos: Skyrim. Los sucesos que acontecen en esta entrega tienen lugar 200 años después de los hechos de The Elder Scrolls IV: Oblivion. El Imperio es obligado por el tratado de paz conocido como el Concordato Blanco y Dorado tras la Gran Guerra contra el Dominio de Aldmer a prohibir el culto y adoración de Talos, el primer emperador de la Dinastía Septim que además ascendió a dios. Sin embargo, los Nórdicos no toleran la prohibición de la adoración de uno de sus héroes y protector de la humanidad, por lo que en Skyrim sucede una Guerra Civil entre dos bandos: la Legión Imperial Nórdica y los Capas de la Tormenta (los Nórdicos que luchan por la independencia del Reino de Skyrim). Sin embargo, la Guerra Civil no será lo único que preocupe a los habitantes de Skyrim, ya que los Dragones, que se creían extintos; han regresado, devastando pueblos y ciudades, y alguien deberá hacerles frente. Skyrim es la región más septentrional del continente de Tamriel. Esta Provincia hace frontera con Morrowind por el este, Cyrodiill por el sur, Hammerfell al suroeste y High Rock por el oeste. Tiene diferentes tipos de terreno incluyendo llanos de tundra, bosques, tierras altas y zonas montañosas. Es la región más escarpada del continente y dispone de las cuatro montañas más altas de todo Tamriel. Sólo en las zonas del oeste hay algunas zonas de tierra baja donde reside la mayor parte de la población. Dispone de un clima frío y nevado.");
	contenidos.push("Aún se encuentra en desarrollo.");
	imagenes.push("../img/tes1/7.jpg");
	imagenes.push("../img/tes2/7.jpg");
	imagenes.push("../img/tes3/7.jpg");
	imagenes.push("../img/tes4/7.jpg");
	imagenes.push("../img/tes5/7.jpg");
	imagenes.push("../img/teso/7.jpg");
	//////////////////////////////////
	for(i = 0; i < 6; i++){
		//
		var cen = document.createElement("center");
		var dt = document.createElement("div");
		dt.id = "titulo";
		dt.appendChild(document.createTextNode(titulos[i]));
		titus.appendChild(dt);
		titus.appendChild(cen);
		var iman = document.createElement("img");
		iman.id = "perfil";
		iman.src = imagenes[i];
		cen.appendChild(iman);
		var dc = document.createElement("div");
		dc.id = "contenido";
		dc.appendChild(document.createTextNode(contenidos[i]));
		titus.appendChild(dc);
		titus.appendChild(document.createElement("br"));
	}
}