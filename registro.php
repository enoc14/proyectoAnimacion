<?php include "header.php" ?>

<!-- Sub Page Banner
	============================================= -->
	<section class="sub-page-banner text-center" data-stellar-background-ratio="0.3">

		<div class="overlay"></div>

		<div class="container">
			<h1 class="entry-title">INICIAR SESIÓN / CREAR CUENTA</h1>
		</div>

	</section>

	<!-- Sub Page Content
	============================================= -->
	<div id="sub-page-content" class="clearfix">
		<div class="container">
			
			<div class="row">

				<div class="col-md-6">
					
					<h2 class="light bordered">Soy <span>Paciente</span></h2>
					
					
					<!-- Contact Form
						============================================= -->
					<div class="contact-form clearfix">
						<div id="ale-contact" class="success" style="display:none;">Thank you! we'll contact you shortly.</div>
						<form name="contact_form">
							<div class="row">

								<div class="input-group col-md-12" style="margin-bottom: 10px">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-envelope"></i>
									</span>
									<input type="email" name="mail" class="form-control" placeholder="Correo" onKeyPress="removeChecks();">
								</div>

								<div class="input-group col-md-12" style="margin-bottom: 10px">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-lock"></i>
									</span>
									<input type="password" name="contra" class="form-control" placeholder="Contraseña">
								</div>

							</div>
								<input type="submit" class="btn btn-default btn-block" value="Entrar" onClick="validateContact();">
						</form>
					</div>
				</div>

				<div class="col-md-6" style="border-left: 2px dashed;">
					
					<h2 class="light bordered">Registrar nuevo <span>Paciente</span></h2>
					
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

								<div id="gNombreReg" class="form-group col-md-12" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-user"></span>
										</div>
										<input type="text" name="nombre" class="form-control" placeholder="Nombre y Apellídos">
									</div>
								</div>	

								<div class="form-group col-md-12" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<i class="glyphicon glyphicon-envelope"></i>
										</div>
										<input type="email" name="mail" class="form-control" placeholder="Correo" onKeyPress="removeChecks();">
									</div>	
								</div>

								<div class="form-group col-md-12" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<i class="glyphicon glyphicon-calendar"></i>
										</div>
										<input type="text" id="datepicker" class="form-control" name="da" placeholder="Fecha de Nacimiento">
									</div>
								</div>

								<div class="input-group col-md-12" style="margin-bottom: 10px">
									<select class="form-control">
										<option>Hombre</option>
										<option>Mujer</option>
									</select>
								</div>
							</div>
							<a id="validaRegistro" class="btn btn-default btn-block disabled">REGISTRARME</a>
						</form>
					</div>
				</div>
			</div>	
		</div>
	</div>

	<button id="ejemplo" onclick="sweet();">Click me</button>


<?php include "footer.php" ?>
