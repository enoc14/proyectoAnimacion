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
        console.log(JSON.stringify(data.responseText));
        var datos = JSON.parse(data.responseText);
        console.log(datos);
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
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-5">
            <a class="btn btn-success" href="#">Guardar</a>
        </div>
        </div>
        `;
        divPerfil.append(plantilla);
    }
    getDatosPacientes();
}