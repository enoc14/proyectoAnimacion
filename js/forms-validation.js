// JavaScript Document


	///////////////////////////////////////// Contacto Form //////////////////////////////////////////

	var nombre = document.getElementById("nombreContacto");
	var correo = document.getElementById("emailContacto");
	var titulo = document.getElementById("tituloContacto");
	var mensaje = document.getElementById("msgContacto");
	var nombreError = document.getElementById("nombreError");
	var correoError = document.getElementById("correoError");
	var tituloError = document.getElementById("tituloError");
	var msjError = document.getElementById("msjError");
	var gNombre = document.getElementById("gNombre");
	var gCorreo = document.getElementById("gCorreo");
	var gTitulo = document.getElementById("gTitulo");
	var gMsj = document.getElementById("gMsj");
	var validaContacto = document.getElementById("validaContacto");
	var alerta = $("#alert-contact");
	var alertaw = $("#alert-contact-d");

	var bandera = [0,0,0,0];
		
	function removeChecksContact(num){

		var pattern1= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		switch(num) {
			case 1:
				if (nombre.value.length <= 10){
					gNombre.classList.remove("has-success");
					gNombre.classList.add("has-error");
					nombreError.style.display = "block";
					bandera[0] = 0;
				} else{
					gNombre.classList.remove("has-error");
					gNombre.classList.add("has-success");
					nombreError.style.display = "none";
					bandera[0] = 1;		
				}
				break;

			case 2:
				if (!pattern1.test(correo.value)){
					gCorreo.classList.remove("has-success");
					gCorreo.classList.add("has-error");
					correoError.style.display = "block";
					bandera[1] = 0;
				} else{
					gCorreo.classList.remove("has-error");
					gCorreo.classList.add("has-success");
					correoError.style.display = "none";
					bandera[1] = 1;
				}
				break;

			case 3:
				if (titulo.value.length <= 5){
					gTitulo.classList.remove("has-success");
					gTitulo.classList.add("has-error");
					tituloError.style.display = "block";
					bandera[2] = 0;
				} else{
					gTitulo.classList.remove("has-error");
					gTitulo.classList.add("has-success");
					tituloError.style.display = "none";
					bandera[2] = 1;
				}
				break;

			case 4:
				if (mensaje.value.length <= 10){
					gMsj.classList.remove("has-success");
					gMsj.classList.add("has-error");
					msjError.style.display = "block";
					bandera[3] = 0;
				} else{
					gMsj.classList.remove("has-error");
					gMsj.classList.add("has-success");
					msjError.style.display = "none";
					bandera[3] = 1;
				}
				break;
		}

		if(!bandera.includes(0))
			validaContacto.classList.remove("disabled");
	}

	validaContacto.addEventListener("click", function(){
		let n = nombre.value.replace(/ /g,"+");
		let t = titulo.value.replace(/ /g,"+");
		let m = mensaje.value.replace(/ /g,"+");

		var formData = {
            'nombre'	: n,
            'correo'    : correo.value,
            'titulo'    : t,
            'mensaje'	: m
        };

        ajax(1,"submitContacto",formData,Object.keys(formData).length);
	});
	
	function clearInputs(){
		nombre.value = "";
		gNombre.classList.remove("has-success");
		correo.value = "";
		gCorreo.classList.remove("has-success");
		titulo.value = "";
		gTitulo.classList.remove("has-success");
		mensaje.value = "";
		gMsj.classList.remove("has-success");
		validaContacto.classList.add("disabled");
	}
	
	
	///////////////////////////////////////// AJAX //////////////////////////////////////////
	
	function ajax(id, pagina, datos, size){
		//loader.style.display = "block";
		// Ordenar los datos
		var liga = "";
		var i = 0;
		for (var key in datos){
			liga += key + '=' + datos[key];
			if(i < size-1)
				liga += "&";
			i++;
		}

		// Alerta
		var boton = document.createElement("div");
		boton.classList.add("loader");

		swal({
			title: "Cargando...",
			content: boton,
			button: false,
		});

		
		// Ajax
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {

		    if(xhttp.responseText){
		    	clearInputs();
				//loader.style.display = "none";
				swal.close();
		    	alerta.fadeIn(2000);
		    } else {
		  		clearInputs();
				//loader.style.display = "none";
				swal.close();
		    	alertaw.fadeIn(2000);
		    }
		  }
		};
		xhttp.open("POST", pagina+".php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(liga);
	}
