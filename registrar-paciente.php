<?php
include('header-doctor.php');
?>
<!-- Sub Page Content
	============================================= -->
	<div id="sub-page-content" class="clearfix">
		<div class="container">	
			<div class="row">
				<div class="col-md-12" style="margin-top:100px;">
					<!-- Contact Form
						============================================= -->
                        <div class="contact-form clearfix">
						<div id="alert-registro" class="alert alert-success alert-dismissable fade in" style="display: none">
						 	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						  	<strong>¡Usuario registrado con Éxito!, contraseña enviada a su correo.</strong>
						</div>

						<div id="alert-registro-d" class="alert alert-danger alert-dismissable fade in" style="display: none">
						 	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						  	<strong>¡Ha ocurrido un error con nuestro servidor!</strong> Intente más tarde.
						</div>

						<form name="contact_form">
							<div class="row">
								<div id="fgNombre" class="form-group col-md-12 col-lg-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-user"></span>
										</div>
										<input id="inputNombre" type="text" name="nombre" class="form-control" placeholder="Nombre y Apellídos">
									</div>
									<p id="errorNombre" class="help-block text-danger" style="display: none;" >Ingrese su nombre completo</p>
								</div>

								<div id="fgCorreo" class="form-group col-md-12 col-lg-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<i class="glyphicon glyphicon-envelope"></i>
										</div>
										<input id="inputCorreo" type="email" name="mail" class="form-control" placeholder="Correo" onKeyPress="removeChecks();">
									</div>
									<p id="errorCorreo" class="help-block text-danger" style="display: none;" >Ingrese un correo válido</p>	
								</div>

								<div id="fgFecha" class="form-group col-md-12 col-lg-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<i class="glyphicon glyphicon-calendar"></i>
										</div>
										<input id="inputFecha" type="text" id="datepicker" class="form-control" name="da" placeholder="Fecha de Nacimiento">
									</div>
									<p id="errorFecha" class="help-block text-danger" style="display: none;" >Ingrese una fecha válida</p>
								</div>

								<div id="fgNumeroTelefono" class="form-group col-md-6 col-lg-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-phone"></span>
										</div>
										<input id="inputNumeroTelefono" type="number" name="tel" class="form-control" placeholder="Número de Telefono">
									</div>
									<p id="errorTel" class="help-block text-danger" style="display: none;" >Ingrese un número de telefono válido</p>
								</div>

								<div class="input-group col-md-6 col-lg-12" style="margin-bottom: 10px">
									<select class="form-control">
										<option>Hombre</option>
										<option>Mujer</option>
									</select>
								</div>
                                
							</div>
							<a id="btnRegistro" class="btn btn-default btn-block disabled">REGISTRARME</a>
						</form>
					</div>
				</div>
			</div>	
		</div>
	</div>
	<!--<div id="carga" class="loader" style="display: none"></div>-->
<?php
include('footer.php');
?>