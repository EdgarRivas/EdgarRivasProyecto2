function crearElemento(tipo, dui, texto){
	return $("<" + tipo + ">", {id: dui, text: texto});
}

function crearImagen(dui, texto){
	return $("<img>", {id: dui, src: texto});
}

function crearInput(tipo, dui, valuo){
	return $("<input>", {type: tipo, id: dui, value: valuo});
}

$(document).on("ready", function(){
	var titu = $("#enca");
	titu.append(crearElemento("div", "titulo", "Edgar Rivas"));
	titu.append(crearElemento("div", "contenido", "Está sección fue creada con DOM y jQuery, se usa eventos y Expresiones Regulares."));
	var cen = crearElemento("center", "", "");
	cen.append(crearImagen("perfil", "../img/perfil.jpg"));
	titu.append("br", "", "");
	titu.append(cen);
	titu.append("br", "", "");
	titu.append(crearElemento("div", "contenido", "Palabras del creador: Soy Edgar Rivas el creador del sitio que está visitando, la razón que me impulso a decidir el tema de videojuego y especificamente el videojuego The Elder Scrolls es por que he admirado siempre la saga, y con ello nos basamos, con mi equipo, para la realización del proyecto del presente año: Nordic Legend. Pretendo seguir en el medio de los juegos."));
	titu.append(crearElemento("div", "contenido", "Estoy bastante relacionado con este tipo de trabajo (el modelado 3D y la creacion de ambientes), a continuación muestro uno de los trabajos de creación de ambiente que cree hace un tiempo:"));
	var cen = crearElemento("center", "", "");
	cen.append(crearImagen("perfil", "../img/mitrabajo.jpg"));
	titu.append("br", "", "");
	titu.append(cen);
	titu.append("br", "", "");
	//Ahora agregaré lo que a la seño importa:
	titu.append(crearElemento("div", "titulo", "Valoración de la material"));
	titu.append(crearElemento("div", "contenido", "La materia de Lenguaje Interpretado al Cliente (LIC), que ha tratado del desarrollo de aplicaciones web del lado del cliente, realmente ha sido la materia que nos ha dado más conocimientos nuevos, con respecto a las otroas."));
	titu.append(crearElemento("div", "contenido", "Ciertamente, la mayoría de los temas vistos fueron teórias nuevas para la mayoría de los estudiantes que recibimos este módulo. Al final del ciclo puedo decir ciertamente que comprendo casi del todo los temas que se incluyeron. Aunque no haya sido así al principio del ciclo."));
	titu.append(crearElemento("div", "contenido", "Finalmente, me ha gustado el desarrollo web y el diseño del mismo, la creación dinámica es parte de lo que más me ha gustado, DOM, más concretamente. Siempre desde que comence el estudio de informática me había preguntado como generar nuevos elementos para mostrar resultados en la misma página de un sitio. Ahora comprendo bien como hacerlo."))
	titu.append(crearElemento("div", "contenido", "Solo me queda decir, que erre al pensar que esta materia iba a ser la aburrida materia donde se aprende HTML y ya. Pero demostro ser mucho más que eso. Un reto de verdad."));
	/////A crear un formulario
	titu.append(crearElemento("div", "titulo", "Necesita de mis servicios?"));
	titu.append(crearElemento("div", "contenido", "Si necesita un trabajo de diseño gráfico, tanto web, 3D o 2D contacteme."));
	titu.append("br", "", "");
	var linea = crearElemento("div", "contenido", "Nombre completo (LETRAS): ");
	titu.append(linea);
	linea.append(crearInput("text", "txtName", ""));
	////////////////////
	titu.append("br", "", "");
	var linea = crearElemento("div", "contenido", "Nombre completo (ejm@mail.com): ");
	titu.append(linea);
	linea.append(crearInput("text", "txtCorreo", ""));
	////////////////////
	titu.append("br", "", "");
	var linea = crearElemento("div", "contenido", "Teléfono (XXXX-XXXX): ");
	titu.append(linea);
	linea.append(crearInput("text", "txtTel", ""));
	////////////////////
	titu.append("br", "", "");
	var linea = crearElemento("div", "contenido", "");
	titu.append(linea);
	var botis = crearInput("button", "btnDone", "Enviar");
	$(botis).click(function(){
		var count = 0;
		var formato = /^([a-zA-Z]|\s){1,}$/;
		if(!formato.test(document.getElementById("txtName").value)){
			alert("Debe ingresar solamente letras y espacios en el campo de NOMBRE.");
			count++;
		}
		////////////
		var formato = /^([a-zA-Z]|\d|\_|\.){1,}[@]([a-zA-Z]|\d|\_|\.){1,}$/;
		if(!formato.test(document.getElementById("txtCorreo").value)){
			alert("El formato del correo debe ser: ejemplo.2013@mail.com");
			count++;
		}
		////////////
		var formato = /^\d{1,}[\-]\d{1,}$/;
		if(!formato.test(document.getElementById("txtTel").value)){
			alert("El formato del teléfono debe ser: XXXX-XXXX");
			count++;
		}
		if(count == 0){
			alert("Estos datos fueron enviados al más allá:\nNombre: " + document.getElementById("txtName").value + "\nCorreo: " + document.getElementById("txtCorreo").value + "\nTeléfono: " + document.getElementById("txtTel").value);
		}
	});
	linea.append(botis);
});