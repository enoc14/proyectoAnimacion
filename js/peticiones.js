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