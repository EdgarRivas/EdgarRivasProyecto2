function crearElemento(tipo, dui, texto){
	return $("<" + tipo + ">", {id: dui, text: texto});
}

function crearImagen(dui, url){
	return $("<img>", {id: dui, src: url});
}

function crearVids(url){
	return $("<iframe>", {controls: true, id: "videos", src: url, frameborder: 0, allowfullscreen: ""});
}

$(document).on("ready", function(){
	var titu = $("#enca");
	titu.append(crearElemento("div", "titulo", "Galería de imagenes"));
	titu.append(crearElemento("div", "contenido", "La galería de imagenes es traida a ustedes gracias a: For, If, switch, jQuery y DOM"));
	titu.append(crearElemento("div", "contenido", "A continuación se muestra nuestra galeria, la cual se ordena por juego, y a su vez los juegos están ordenados por fechas. Disfrutad de la sección:"));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES I: Arena (1994)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	var svids = confirm("Desea que aparezcan los vídeos?");
	for(i = 1; i<8; i++){
		if(i % 2 == 1){
			cen.append(crearImagen("gart", "../img/tes1/" + i + ".jpg"));
		} else if(i % 2 == 0){
			cen.append(crearImagen("gart", "../img/tes1/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
		} else {
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/v_h15FNcalM"));
		cen.append(crearElemento("br", "", ""));
	} else {
		alert("Muy bien, entonces los videos no se mostrarán");
	}
	titu.append(crearElemento("br", "", ""));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES II: Daggerfall (1996)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	for(i = 1; i<8; i++){
		if(i % 2 == 1){
			cen.append(crearImagen("gart", "../img/tes2/" + i + ".jpg"));
		} else if(i % 2 == 0){
			cen.append(crearImagen("gart", "../img/tes2/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
		} else {
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/9VH3iuuiyuo"));
		cen.append(crearElemento("br", "", ""));
	} else {
		//
	}
	titu.append(crearElemento("br", "", ""));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES III: Morrowind (2002)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	for(i = 1; i<8; i++){
		if(i % 2 == 1){
			cen.append(crearImagen("gart", "../img/tes3/" + i + ".jpg"));
		} else if(i % 2 == 0){
			cen.append(crearImagen("gart", "../img/tes3/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
		} else {
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/6HhlSXP4soI"));
		cen.append(crearElemento("br", "", ""));
	} else {
		//
	}
	titu.append(crearElemento("br", "", ""));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES IV: Oblivion (2006)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	for(i = 1; i<8; i++){
		var thing = i % 2;
		switch (thing) {
		case 1:
			cen.append(crearImagen("gart", "../img/tes4/" + i + ".jpg"));
			break;
		case 0:
			cen.append(crearImagen("gart", "../img/tes4/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
			break;
		default:
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
			break;
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/ORmqaI1H7k0"));
		cen.append(crearElemento("br", "", ""));
	} else {
		//
	}
	titu.append(crearElemento("br", "", ""));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES V: Skyrim (2011)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	for(i = 1; i<8; i++){
		var thing = i % 2;
		switch (thing) {
		case 1:
			cen.append(crearImagen("gart", "../img/tes5/" + i + ".jpg"));
			break;
		case 0:
			cen.append(crearImagen("gart", "../img/tes5/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
			break;
		default:
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
			break;
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/QpvM9uwOcUc"));
		cen.append(crearElemento("br", "", ""));
	} else {
		//
	}
	titu.append(crearElemento("br", "", ""));
	////////////////////////////////////////////////
	titu.append(crearElemento("div", "titulo", "TES: Online (2014)"));
	var cen = crearElemento("center", "", "");
	titu.append(cen);
	for(i = 1; i<8; i++){
		var thing = i % 2;
		switch (thing) {
		case 1:
			cen.append(crearImagen("gart", "../img/teso/" + i + ".jpg"));
			break;
		case 0:
			cen.append(crearImagen("gart", "../img/teso/" + i + ".jpg"));
			cen.append(crearElemento("br", "", ""));
			break;
		default:
			alert("WHOOPS!\nAlgo salió mal. Prueba a recargar la página")
			break;
		}
	}
	if(svids == true){
		cen.append(crearElemento("div", "contenido", "A continuacion el video:"));
		cen.append(crearElemento("br", "", ""));
		cen.append(crearVids("http://www.youtube.com/embed/0jNT5cMwxw0"));
		cen.append(crearElemento("br", "", ""));
	} else {
		//
	}
	titu.append(crearElemento("br", "", ""));
});