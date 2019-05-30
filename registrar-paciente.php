<?php
    session_start();
    if($_SESSION['tipo'] != 'doctor')
        header("Location:index.php");  

    $title = "Registrar Paciente";
    $nameDoctor = $_SESSION['nombre'];
    $tipoDoctor = $_SESSION['tipo'];
    $emailDoctor = $_SESSION['correo'];

    include('header-doctor.php');
?>
<script>
    window.name = "registrar-paciente";
</script>

<!-- Sub Page Content
	============================================= -->
<div id="sub-page-content" class="clearfix">
    <div class="container">
        <div class="row">
            <div class="col-md-12" style="margin-top:100px;">
                <!-- Contact Form
						============================================= -->
                <div class="contact-form clearfix">
                    <div id="alert-registro" class="alert alert-success alert-dismissable fade in"
                        style="display: none">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>¡Usuario registrado con Éxito!, contraseña enviada a su correo.</strong>
                    </div>

                    <div id="alert-registro-d" class="alert alert-danger alert-dismissable fade in"
                        style="display: none">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>¡Ha ocurrido un error con nuestro servidor!</strong> Intente más tarde.
                    </div>

                    <form name="form-registrarPaciente">
                        <div class="row">
                            <div id="fgNombrePaciente" class="form-group col-md-6 col-lg-6" style="margin-bottom: 10px">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-user"></span>
                                    </div>
                                    <input id="inputNombrePaciente" type="text" name="nombre" class="form-control"
                                        placeholder="Nombre y Apellídos"
                                        onKeyPress="verificarEntradasRegistroPaciente(1)">
                                </div>
                                <p id="errorNombreRegistroPaciente" class="help-block text-danger"
                                    style="display: none;">Ingrese su nombre completo</p>
                            </div>
                            <div id="fgCorreoPaciente" class="form-group col-md-6 col-lg-6" style="margin-bottom: 10px">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-envelope"></i>
                                    </div>
                                    <input id="inputCorreoPaciente" type="email" name="mail" class="form-control"
                                        placeholder="Correo" onKeyPress="verificarEntradasRegistroPaciente(2)">
                                </div>
                                <p id="errorCorreoRegistroPaciente" class="help-block text-danger"
                                    style="display: none;">Ingrese un correo válido</p>
                            </div>
                        </div class="row">
                        <div class="row">
                            <div id="fgFechaPaciente" class="form-group col-md-12 col-lg-6" style="margin-bottom: 10px">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-calendar"></i>
                                    </div>
                                    <input id="inputFechaPaciente" type="text" id="datepicker" class="form-control"
                                        name="da" placeholder="DD/MM/YYYY"
                                        onKeyPress="verificarEntradasRegistroPaciente(3)">
                                </div>
                                <p id="errorFechaRegistroPaciente" class="help-block text-danger"
                                    style="display: none;">Ingrese una fecha válida (DD/MM/YYYY)</p>
                            </div>
                            <div id="fgTelefonoPaciente" class="form-group col-md-6 col-lg-6"
                                style="margin-bottom: 10px">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-phone"></span>
                                    </div>
                                    <input id="inputTelefonoPaciente" type="number" name="tel" class="form-control"
                                        placeholder="Número de Telefono"
                                        onKeyPress="verificarEntradasRegistroPaciente(4)">
                                </div>
                                <p id="errorTelefonoRegistroPaciente" class="help-block text-danger"
                                    style="display: none;">Ingrese un número de telefono válido</p>
                            </div>
                            <div class="input-group col-md-6 col-lg-12" style="margin-bottom: 10px">
                                <select class="form-control" id="inputGeneroPaciente">
                                    <option value="Masculino">Hombre</option>
                                    <option value="Femenino">Mujer</option>
                                </select>
                            </div>
                        </div>
                        <a id="btnRegistrarPaciente" class="btn btn-default btn-block disabled">REGISTRARME</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include('footer.php');
?>