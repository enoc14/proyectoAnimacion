if(window.name == "ver-pacientes"){
    
    var divPacientes = $('#divPacientes');

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
        <div class="col-md-12  padding-bottom-60 clearfix">
            <div class="doctors-img">
                <img src="images/${datos.ruta_Paciente}" class="responsive-img" alt="Paciente">
            </div>
            <div class="doctors-detail">
                <input type="text" name="inputNombrePaciente" value="${datos.nombre_Paciente}" disabled/>
                <input type="text" name="inputEdadPaciente" value="${edad}" disabled/>
                <input type="email" name="inputCorreoPaciente" value="${datos.correo_Usuario_Paciente}" disabled/>
                <input type="number" name="inputTelefonoPaciente" value="${datos.telefono_Paciente}"/>
                <input type="password" name="inputPasswordPaciente" value="************" disabled/>
                <input type="text" name="inputGeneroPaciente" value="${datos.genero_Paciente}" disabled/>
                <div>
                    <a href="#togglePass" class="btn btn-success" data-toggle="collapse">Cambiar Contraseña</a>
                    <div id="togglePass" class="collapse">
                        <input type="password" name="inputPasswordPaciente1" placeholder="Ingresar Contraseña Nueva" required/>
                        <input type="password" name="inputPasswordPaciente2" placeholder="Confirmar Contraseña Nueva" required/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-md-offset-6">
                <input  type="submit" class="btn btn-success" value="Guardar Cambios">
            </div>
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

