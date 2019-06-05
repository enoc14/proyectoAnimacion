if(window.name == "ver-pacientes"){
    
    var divPacientes = $('#divPacientes');
    var divModal = document.getElementById('myModal');
    var span;
    
    window.onclick = function(event) {
        if (event.target == divModal) {
            divModal.style.display = 'none';
        }
    }

    function getDatosPacientes(){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                mostrarDatos(this);
            }
        };
        ajax.open("GET","php/ver-pacientes-data.php",true);
	    ajax.send();
    }

    function mostrarDatos(data){
        var datos = JSON.parse(data.responseText);
        if(Object.keys(datos).length){
            for (let i in datos){
                var edad = new Date().getFullYear() - parseInt(datos[i].fecha_Paciente);
                var plantilla = `
                    <div class="col-md-6 padding-bottom-60 clearfix">

                        <div class="doctors-img">
                            <img src="images/${datos[i].ruta_Paciente}" class="responsive-img" alt="Paciente" title="${datos[i].nombre_Paciente}">
                        </div>

                        <div class="doctors-detail">
                            <h4>${datos[i].nombre_Paciente}<span>Paciente ${datos[i].id_Paciente}</span></h4>
                            <p><label class="heading">Edad</label><label class="detail">${edad} años</label></p>
                            <p><label class="heading">Genero</label><label class="detail">${datos[i].genero_Paciente}</label></p>
                            <p><label class="heading">Teléfono</label><label class="detail">${datos[i].telefono_Paciente}</label></p>
                            <p><label class="heading">Correo</label><label class="detail text-justify">${datos[i].correo_Usuario_Paciente}</label></p>
                            <p><label class="heading">Estadísticas</label><label class="detail text-justify"><a class="point" onclick="getEstadisticasPaciente(${datos[i].id_Paciente})">Ver</a></label></p>
                        </div>
                    </div>
                `;
                divPacientes.append(plantilla);
            }
        } else {
            var plantilla = `
                <h2 class="no-data">Por el momento no tienes Pacientes registrados</h2>
                <button class="btn btn-success" onclick="">Ir a registrar Pacientes</button>
            `;
            divPacientes.append(plantilla);
        }
    }
    getDatosPacientes();

    function getEstadisticasPaciente (idButton) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                mostrarEstadisticasPaciente(this);
            }
        };
        ajax.open("GET","php/modal-estadisticas.php?paciente="+idButton,true);
	    ajax.send();
    }

    function mostrarEstadisticasPaciente(response) {
        var juegos = JSON.parse(response.responseText);

        if(Object.keys(juegos).length){
            var series = 0;

            for (const key in juegos) {
                if(juegos[key].id_Juego_Estadistica == 1)
                    series++;

                // Añadir mas if's para juegos restantes
            }

            var data = [{
                values: [series, 0, 0], //Porcentaje
                labels: ['Series', 'Expresiones', 'Relación'], //Etiquetas
                type: 'pie' //Tipo
            }];
            var layout = {
                title: 'Número de veces jugadas',
                height: 300,
                width: 400
            };
            
            var plantilla = `
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <h2>Estadísticas</h2>
                    </div>
                    <div class="modal-body">
                        <center><div id="pastel"></div></center>
                    </div>
                </div>
            `;
            
            divModal.innerHTML = plantilla;
            pastel = document.getElementById('pastel');
            Plotly.newPlot('pastel', data, layout);
        } else {
            var plantilla = `
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <h2>Estadísticas</h2>
                    </div>
                    <div class="modal-body">
                        <center><h2>Este paciente aún no ha jugado</h2></center>
                    </div>
                </div>
            `;
            divModal.innerHTML = plantilla;
        }
        divModal.style.display = 'block';
        span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            divModal.style.display = "none";
        }
    }
}

if(window.name == "perfil-paciente"){
    
    var divPerfil = $('#divPerfil');
    var divEstadisticas = $('#divEstadisticas');

    function getDatosPacientes(){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                mostrarDatos(this);
            }
        };
        ajax.open("GET","php/perfil-paciente-data.php",true);
	    ajax.send();
    }

    function mostrarDatos(data){
        var datos = JSON.parse(data.responseText);
        var edad = new Date().getFullYear() - parseInt(datos.fecha_Paciente);
        var plantilla = `
        <div class="col-md-8 col-md-offset-3 padding-bottom-60 clearfix">
            <div class="doctors-img">
                <img src="images/${datos.ruta_Paciente}" class="responsive-img" alt="Paciente">
            </div>
            <div class="doctors-detail">
                <input type="text" placeholder="${datos.nombre_Paciente}" disabled/>
                <input type="text" placeholder="${edad}" disabled/>
                <input type="email" placeholder="${datos.correo_Usuario_Paciente}" disabled/>
                <input type="number" placeholder="${datos.telefono_Paciente}"/>
                <input type="password" placeholder="************" disabled/> <a href="#togglePass" class="btn btn-success" data-toggle="collapse">Cambiar Contraseña</a>
                <div id="togglePass" class="collapse">
                    <input type="password" placeholder="Ingresar Contraseña Nueva" />
                    <input type="password" placeholder="Confirmar Contraseña Nueva" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-5">
            <a class="btn btn-success" href="#">Guardar</a>
        </div>
        `;
        divPerfil.append(plantilla);
    }

    function getEstadisticas() {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                mostrarEstadisticas(this);
            }
        };
        ajax.open("GET","php/estadisticas-paciente-data.php",true);
	    ajax.send();
    }

    function mostrarEstadisticas(puntajes) {
        var gx = [], gy = [];
        var data = JSON.parse(puntajes.responseText);
        if(Object.keys(data).length){
            for (const key in data) {
                gx.push(data[key].id_Estadistica);
                gy.push(data[key].puntaje_Estadistica);
            }
            var trace1 = {
                x: gx,
                y: gy,
                mode: 'markers+lines',
                name: 'Puntuaciones'
            };
            var layout = {
                title: 'Juego de Series',
                xaxis: {
                title: 'Partida',
                showline: true,
                showgrid: true,
                zeroline: false
                },
                yaxis: {
                title: 'Puntuacion',
                showline: true
                }
            };
            var puntuacion = [trace1];
            Plotly.newPlot('divEstadisticas', puntuacion, layout);
        } else {
            plantilla = `
                <h2>Cuando juegues alguna partida tus estadísticas se mostrarán aquí</h2>
            `;
            divEstadisticas.append(plantilla);
        }
    }

    getDatosPacientes();
    getEstadisticas();
}