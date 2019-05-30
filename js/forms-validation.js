	///////////////////////////////////////// Contacto Form //////////////////////////////////////////
if (window.name == 'contacto') {

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

	var bandera = [0, 0, 0, 0];
	var pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	function removeChecksContact(num) {
		switch (num) {
			case 1:
				if (nombre.value.length <= 10) {
					gNombre.classList.remove("has-success");
					gNombre.classList.add("has-error");
					nombreError.style.display = "block";
					bandera[0] = 0;
				} else {
					gNombre.classList.remove("has-error");
					gNombre.classList.add("has-success");
					nombreError.style.display = "none";
					bandera[0] = 1;
				}
				break;

			case 2:
				if (!pattern1.test(correo.value)) {
					gCorreo.classList.remove("has-success");
					gCorreo.classList.add("has-error");
					correoError.style.display = "block";
					bandera[1] = 0;
				} else {
					gCorreo.classList.remove("has-error");
					gCorreo.classList.add("has-success");
					correoError.style.display = "none";
					bandera[1] = 1;
				}
				break;

			case 3:
				if (titulo.value.length <= 5) {
					gTitulo.classList.remove("has-success");
					gTitulo.classList.add("has-error");
					tituloError.style.display = "block";
					bandera[2] = 0;
				} else {
					gTitulo.classList.remove("has-error");
					gTitulo.classList.add("has-success");
					tituloError.style.display = "none";
					bandera[2] = 1;
				}
				break;

			case 4:
				if (mensaje.value.length <= 10) {
					gMsj.classList.remove("has-success");
					gMsj.classList.add("has-error");
					msjError.style.display = "block";
					bandera[3] = 0;
				} else {
					gMsj.classList.remove("has-error");
					gMsj.classList.add("has-success");
					msjError.style.display = "none";
					bandera[3] = 1;
				}
				break;
		}
		if (!bandera.includes(0))
			validaContacto.classList.remove("disabled");
	}

	validaContacto.addEventListener("click", function () {
		let n = nombre.value.replace(/ /g, "+");
		let t = titulo.value.replace(/ /g, "+");
		let m = mensaje.value.replace(/ /g, "+");

		var formData = {
			'nombre': n,
			'correo': correo.value,
			'titulo': t,
			'mensaje': m
		};

		ajax(1, "submitContacto", formData, Object.keys(formData).length);
	});

	function clearInputs() {
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

	function ajax(id, pagina, datos, size) {
		//loader.style.display = "block";
		// Ordenar los datos
		var liga = "";
		var i = 0;
		for (var key in datos) {
			liga += key + '=' + datos[key];
			if (i < size - 1)
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
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {

				if (xhttp.responseText) {
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
		xhttp.open("POST", pagina + ".php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(liga);
	}

}

/////////////////////////////////////////Registrar Paciente Form////////////////////////////////////
if(window.name == 'registrar-paciente'){
	var nombreRegistroPaciente = document.getElementById("inputNombrePaciente");
	var correoRegistroPaciente = document.getElementById("inputCorreoPaciente");
	var fechaRegistroPaciente = document.getElementById("inputFechaPaciente");
	var telefonoRegistroPaciente = document.getElementById("inputTelefonoPaciente");
	var generoRegistroPaciente = document.getElementById("inputGeneroPaciente");
	var msgErrorNombreRegistroPaciente = document.getElementById("errorNombreRegistroPaciente");
	var msgErrorCorreoRegistroPaciente = document.getElementById("errorCorreoRegistroPaciente");
	var msgErrorFechaRegistroPaciente = document.getElementById("errorFechaRegistroPaciente");
	var msgErrorTelefonoRegistroPaciente = document.getElementById("errorTelefonoRegistroPaciente");
	var formGroupNombreRegistroPaciente = document.getElementById("fgNombrePaciente");
	var formGroupCorreoRegistroPaciente = document.getElementById("fgCorreoPaciente");
	var formGroupFechaRegistroPaciente = document.getElementById("fgFechaPaciente");
	var formGroupTelefonoRegistroPaciente = document.getElementById("fgTelefonoPaciente");
	var btnRegistrarPaciente = document.getElementById("btnRegistrarPaciente");
	var alerta = $("#alert-registro");
	var alertaw = $("#alert-registro-d");
	var regDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{3}$/;
	var pattern1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var bandera = [0, 0, 0, 0];


	//////////////////////Opciones de verificacion para Registrar Paciente////////////////////////////
	function verificarEntradasRegistroPaciente(num) {
		switch (num) {
			case 1:
				if (nombreRegistroPaciente.value.length < 10) {
					formGroupNombreRegistroPaciente.classList.remove("has-success");
					formGroupNombreRegistroPaciente.classList.add("has-error");
					msgErrorNombreRegistroPaciente.style.display = "block";
					bandera[0] = 0;
				} else {
					formGroupNombreRegistroPaciente.classList.remove("has-error");
					formGroupNombreRegistroPaciente.classList.add("has-success");
					msgErrorNombreRegistroPaciente.style.display = "none";
					bandera[0] = 1;
				}
				break;
			case 2:
				if (!pattern1.test(correoRegistroPaciente.value)) {
					formGroupCorreoRegistroPaciente.classList.remove("has-success");
					formGroupCorreoRegistroPaciente.classList.add("has-error");
					msgErrorCorreoRegistroPaciente.style.display = "block";
					bandera[1] = 0;
				} else {
					formGroupCorreoRegistroPaciente.classList.remove("has-error");
					formGroupCorreoRegistroPaciente.classList.add("has-success");
					msgErrorCorreoRegistroPaciente.style.display = "none";
					bandera[1] = 1;
				}
				break;
			case 3:
				if (!regDate.test(fechaRegistroPaciente.value)) {
					formGroupFechaRegistroPaciente.classList.remove("has-success");
					formGroupFechaRegistroPaciente.classList.add("has-error");
					msgErrorFechaRegistroPaciente.style.display = "block";
					bandera[2] = 0;
				} else {
					formGroupFechaRegistroPaciente.classList.remove("has-error");
					formGroupFechaRegistroPaciente.classList.add("has-success");
					msgErrorFechaRegistroPaciente.style.display = "none";
					bandera[2] = 1;
				}
				break;
			case 4:
				console.log(telefonoRegistroPaciente.value.length);
				if (!(telefonoRegistroPaciente.value.length == 10)) {
					formGroupTelefonoRegistroPaciente.classList.remove("has-success");
					formGroupTelefonoRegistroPaciente.classList.add("has-error");
					msgErrorTelefonoRegistroPaciente.style.display = "block";
					bandera[3] = 0;
				}
				else {
					formGroupTelefonoRegistroPaciente.classList.remove("has-error");
					formGroupTelefonoRegistroPaciente.classList.add("has-success");
					msgErrorTelefonoRegistroPaciente.style.display = "none";
					bandera[3] = 1;
				}
		}
		if (!bandera.includes(0)) {
			btnRegistrarPaciente.classList.remove("disabled");
		}
	}

	btnRegistrarPaciente.addEventListener('click', function() {
		let name = nombreRegistroPaciente.value.replace(/ /g, "+");
		let date = fechaRegistroPaciente.value.replace(/\//g, "-");
		var data = {
			'nombre': name,
			'fecha': date,
			'correo': correoRegistroPaciente.value,
			'telefono': telefonoRegistroPaciente.value,
			'genero': generoRegistroPaciente.value
		}

		registrarPaciente(data, 5);
	});

	function registrarPaciente(datos, size) {
		var liga = "";
		var i = 0;
		for (const key in datos) {
			liga += key + "=" + datos[key];
			if(i < size - 1)
				liga += "&";
			i++;
		}
		
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {

				if (ajax.responseText) {
					var paciente = JSON.parse(ajax.responseText);

					if(!paciente.insertado){
						alertaw.fadeIn(2000);
						break;
					} else if (paciente.enviado){
						clearInputs();
						alerta.fadeIn(2000);
					} else
						alertaw.fadeIn(2000);

				} else {
					alertaw.fadeIn(2000);
				}
			}
		};
		ajax.open("POST", "php/registrar-paciente-data.php", true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.send(liga);
	}

	function clearInputs() {
		nombreRegistroPaciente.value = "";
		formGroupNombreRegistroPaciente.classList.remove("has-success");
		correoRegistroPaciente.value = "";
		formGroupCorreoRegistroPaciente.classList.remove("has-success");
		fechaRegistroPaciente.value = "";
		formGroupFechaRegistroPaciente.classList.remove("has-success");
		telefonoRegistroPaciente.value = "";
		formGroupTelefonoRegistroPaciente.classList.remove("has-success");
		btnRegistrarPaciente.classList.add("disabled");
	}

}
