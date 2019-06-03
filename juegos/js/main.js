if(window.name == 'series_nivel1'){

	// Ajax Para puntaje
	function guardarPuntaje(datPuntaje){
		
	}

	// Toast
	var toast = document.getElementById("toast")
	var toastImg = document.getElementById("img")
	var toastDesc = document.getElementById("desc")
	var toastIcon = document.getElementById("iconToast")

	function toastCheck(id) {
		if(id == 1){
			toastDesc.innerHTML = "¡CORERCTO!"
			toastImg.style.backgroundColor = "#018800";
			toastIcon.classList.remove("fa-times");
			toastIcon.classList.add("fa-check");
		} else {
			toastDesc.innerHTML = "¡INCORRECTO!"
			toastImg.style.backgroundColor = "#c01818";
			toastIcon.classList.remove("fa-check");
			toastIcon.classList.add("fa-times");
		}
		toast.className = "show";
		setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 1000);
	}

	// Alias
	let Application = PIXI.Application,
		loader = PIXI.loader,
		resources = PIXI.resources,
		Sprite = PIXI.Sprite,
		Container = PIXI.Container,
		Point = PIXI.Point,
		Rope = PIXI.mesh.Rope,
		Res = PIXI.loader.resources,
		Graphic = PIXI.Graphics,
		Text = PIXI.Text;

	// Definir variables
	var serie_array = [Math.round(Math.random()),
					Math.round(Math.random()),
					Math.round(Math.random()),
					Math.round(Math.random())];
	var arrayColors = [0x068905,0xff0000,0x1703ee,0xf9fb09];
	var cont = 0,
		bandera = true,
		f = 5,
		repetir = 0;
	var minBlanco = 100,
		maxBlanco = 130,
		minColor = 0,
		maxColor = 30,
		maxNum = 131;
	var array_orden = [-1,-1,-1,-1];
	var global_cont = 0, txt_cont = 0;
	var sumaTotal = 0, respuestas_cont = 0;

	// Sumar el total de respuestas que deben ser correctas
	for(var i = 0; i < serie_array.length; i++){
		if(serie_array[i])
			sumaTotal++;
	}

	console.log("La suma total es:" + sumaTotal);

	// Create a Pixi Application
	let app = new Application({
		width: 700,
		height: 600,
		antialias: true
	});

	app.renderer.backgroundColor = 0xffffff;

	// Add the canvas to body
	var div = document.getElementById("juego");
	var spanPuntaje = $("#puntaje");
	div.appendChild(app.view);

	// Crear las funciones para aleatoriedad
	function ordenRandom(array_binario){
		for(var i = 0; i < array_binario.length; i++){
			array_orden[i] = numero();
		}
	}

	function pseudo(){
		return Math.round(Math.random()*3);
	}

	function numero(){
		var num = pseudo();

		while(array_orden.includes(num)) 
			num = pseudo();

		return num;
	}
	ordenRandom(serie_array);

	// Funciones para corroborar que el orden es el correcto
	var array_temporal = new Array();
	function eliminar(){
		for(var i = 0; i < serie_array.length; i++){
			array_temporal.push(array_orden[i]);
		}

		var conteo = 0;
		for(var i = 0; i < serie_array.length; i++){
			if(!serie_array[array_temporal[i]]){
				array_temporal.splice(i,1);
				array_temporal.push(0);
				i--;
			}
			if(conteo == 3)	break;
			conteo++;
		}
	}
	eliminar();

	function corroborar(index){
		var resultado = false;

		if(array_temporal[global_cont] == index){
			resultado = true;
			respuestas_cont++;
			global_cont++;
		} else
			resultado = false;

		return resultado;
	}

	var txt_correcto = 'Correcto';
	var txt_error = 'Juego terminado';
	var txt_ganar = 'Haz ganado';
	var txt_array = "array = ["+serie_array[0]+","+serie_array[1]+","+serie_array[2]+","+serie_array[3]+"]";
	console.log(txt_array);

	var btn_play = document.getElementById('play');
	var btn_refresh = document.getElementById('refresh');

	// Cuadrado principal
	let cuadro_principal = new Graphic();
	cuadro_principal.beginFill(0xFFFFFF);	// Relleno del cuadro_principal
	cuadro_principal.lineStyle(2, 0x000000, 1);	// Borde (pixeles, color, alpha)
	cuadro_principal.drawRect(0,0,400,400);	// Dibujarlo (x, y, w, h)
	cuadro_principal.endFill();		// Terminar dibujo

	// Cuadrados
	let cuadro_01 = new Graphic();
	cuadro_01.beginFill(0xFFFFFF);	// Relleno del cuadro_01
	cuadro_01.lineStyle(2, 0x000000, 1);	// Borde (pixeles, color, alpha)
	cuadro_01.drawRect(0,0,200,200);	// Dibujarlo (x, y, w, h)
	cuadro_01.endFill();		// Terminar dibujo

	let cuadro_02 = new Graphic();
	cuadro_02.beginFill(0xFFFFFF);	// Relleno del cuadro_02
	cuadro_02.lineStyle(2, 0x000000, 1);	// Borde (pixeles, color, alpha)
	cuadro_02.drawRect(0,0,200,200);	// Dibujarlo (x, y, w, h)
	cuadro_02.endFill();		// Terminar dibujo

	let cuadro_03 = new Graphic();
	cuadro_03.beginFill(0xFFFFFF);	// Relleno del cuadro_03
	cuadro_03.lineStyle(2, 0x000000, 1);	// Borde (pixeles, color, alpha)
	cuadro_03.drawRect(0,0,200,200);	// Dibujarlo (x, y, w, h)
	cuadro_03.endFill();		// Terminar dibujo

	let cuadro_04 = new Graphic();
	cuadro_04.beginFill(0xFFFFFF);	// Relleno del cuadro_04
	cuadro_04.lineStyle(2, 0x000000, 1);	// Borde (pixeles, color, alpha)
	cuadro_04.drawRect(0,0,200,200);	// Dibujarlo (x, y, w, h)
	cuadro_04.endFill();		// Terminar dibujo

	// Crear texturas a base de Graphics
	let cprincipal_text = app.renderer.generateTexture(cuadro_principal);
	let c01_text = app.renderer.generateTexture(cuadro_01);
	let c02_text = app.renderer.generateTexture(cuadro_02);
	let c03_text = app.renderer.generateTexture(cuadro_03);
	let c04_text = app.renderer.generateTexture(cuadro_04);

	// Crear Sprites
	let serie_numerica, cprincipal_spr, c01_spr, c02_spr, c03_spr, c04_spr;
	var att;
	loader.load(setup);

	var puntaje = 0;
	var cont_puntaje = 0;
	var respuestas_Puntaje = 0;

	function setup() {
		// Contenedor principal
		serie_numerica = new Container();
		
		// Crear Sprites
		cprincipal_spr = new Sprite(cprincipal_text);
		c01_spr = new Sprite(c01_text);
		c02_spr = new Sprite(c02_text);
		c03_spr = new Sprite(c03_text);
		c04_spr = new Sprite(c04_text);
		
		// Posiciones
		c01_spr.position.set(0,0);
		c02_spr.position.set(200,0);
		c03_spr.position.set(0,200);
		c04_spr.position.set(200,200);
		
		att = [c01_spr,c02_spr,c03_spr,c04_spr];

		// Eventos
		btn_play.addEventListener('click', function(){
			f = 0;
			repetir++;
			c01_spr.interactive = false;
			c02_spr.interactive = false;
			c03_spr.interactive = false;
			c04_spr.interactive = false;
		});

		btn_refresh.addEventListener('click', function(){
			location.reload();
		});
		
		c01_spr.click = () => {
			if(corroborar(0)){
				txt_cont = 1;
				txt_correcto.visible = true;
				cont_puntaje = 0;
			}
			else{
				txt_cont = 3;
				txt_error.visible = true;		
			}
		}
		c02_spr.click = () => {
			if(corroborar(1)){
				txt_cont = 1;
				txt_correcto.visible = true;
				cont_puntaje = 0;
			}
			else{
				txt_cont = 3;
				txt_error.visible = true;
			}
		}
		c03_spr.click = () => {
			if(corroborar(2)){
				txt_cont = 1;
				txt_correcto.visible = true;
				cont_puntaje = 0;
			}
			else{
				txt_cont = 3;
				txt_error.visible = true;
			}
		}
		c04_spr.click = () => {
			if(corroborar(3)){
				txt_cont = 1;
				txt_correcto.visible = true;
				cont_puntaje = 0;
			}
			else{
				txt_cont = 3;
				txt_error.visible = true;
			}
		}

		// Colorear
		c01_spr.mouseover = () => c01_spr.tint = 0x068905;
		c01_spr.mouseout = () => c01_spr.tint = 0xffffff;
		c02_spr.mouseover = () => c02_spr.tint = 0xff0000;
		c02_spr.mouseout = () => c02_spr.tint = 0xffffff;
		c03_spr.mouseover = () => c03_spr.tint = 0x1703ee;
		c03_spr.mouseout = () => c03_spr.tint = 0xffffff;
		c04_spr.mouseover = () => c04_spr.tint = 0xf9fb09;
		c04_spr.mouseout = () => c04_spr.tint = 0xffffff;
		
		animar();
		
		// Añadir cuadros
		app.stage.addChild(serie_numerica);
		serie_numerica.addChild(cprincipal_spr);
		serie_numerica.addChild(c01_spr);
		serie_numerica.addChild(c02_spr);
		serie_numerica.addChild(c03_spr);
		serie_numerica.addChild(c04_spr);
	}

	// Función de que anima todo :v
	function animar() {
		requestAnimationFrame(animar);

		// Solo puede ver la secuencia 2 veces
		if(repetir == 2)
			btn_play.style.display = 'none';

		// Controla la posición del arreglo
		if(cont == maxNum){
			f++;
			cont = 0;
		}
		
		// Pintar secuencia
		if(f < serie_array.length){	// Si se encuentra en el arreglo, la animación sigue
			if(serie_array[array_orden[f]]){	// Si el elemeto en la posición es 1, se colorea
				cont ++;
			
				if(cont >= minBlanco && cont <= maxBlanco)
					att[array_orden[f]].tint = 0xffffff;
				if(cont >= minColor && cont <= maxColor)
					att[array_orden[f]].tint = arrayColors[array_orden[f]];
			} else	// Si no es 1, se ignora
				f++;	
		} else if (f==att.length){	// Terminó la animación
			f++;
			for (var i = 0; i < att.length; i++) {
				att[i].interactive = true;
				att[i].buttonMode = true;
			}
		}

		// Animación respuestas
		if(txt_cont == 1){ // Si la respuesta es correcta, aparece mensaje
			puntaje += 50;
			txt_cont++;
			spanPuntaje.html(puntaje);
			toastCheck(1);
		}//else{
		//	txt_correcto.visible = false;
		//}

		if(txt_cont == 3){ 	// Si no es correcta, el juego termina
			if(respuestas_Puntaje >= 2 || puntaje <= 25 ){
				att[0].interactive = false;
				att[1].interactive = false;
				att[2].interactive = false;
				att[3].interactive = false;
				txt_cont++;
				swal ( ":(" ,  "Juego Terminado" ,  "error" );
			} else{
				respuestas_Puntaje++;
				puntaje -= 25;
				txt_cont++;
				spanPuntaje.html(puntaje);
				console.log(txt_error);
				btn_play.style.display = "none";
				toastCheck(2);
			}
		}

		if(respuestas_cont == sumaTotal && txt_cont == 2){	// Si todo es correcto, el jugador ganó
			
			btn_play.style.display = "none";
			att[0].interactive = false;
			att[1].interactive = false;
			att[2].interactive = false;
			att[3].interactive = false;
			txt_cont = 50;

			swal(":)", "Haz Ganao", "success")
				.then((value) => {
					console.log(txt_ganar + " - " + puntaje);
				});
		}
	}

	// Canvas en tamaño completo
	//app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.autoDensity = true;
	app.renderer.resize(600, 450);
}