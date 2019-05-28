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

				<div class="col-xs-12">
					
					<h2 class="light bordered">Iniciar <span>Sesión</span></h2>
					
					
					<!-- Contact Form
						============================================= -->
					<div class="contact-form clearfix">
						<div id="ale-contact" class="success" style="display:none;">Thank you! we'll contact you shortly.</div>
						<form name="contact_form" action="validar-email.php" method="POST">
							<div class="row">

								<div class="input-group col-md-12" style="margin-bottom: 10px">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-envelope"></i>
									</span>
									<input type="email" name="email_Sesion" class="form-control" placeholder="Correo" onKeyPress="removeChecks();">
								</div>

								<div class="input-group col-md-12" style="margin-bottom: 10px">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-lock"></i>
									</span>
									<input type="password" name="pass_Sesion" class="form-control" placeholder="Contraseña">
								</div>

							</div>
								<input type="submit" class="btn btn-default btn-block" value="Entrar" onClick="">
						</form>
					</div>
				</div>
			</div>	
		</div>
	</div>

<?php include "footer.php" ?>
