<?php include "header.php" ?>
<script>
    window.name = "contacto";   
</script>

<!-- Sub Page Banner
	=============================================  -->
	<section class="sub-page-banner-contact" data-stellar-background-ratio="0.3">

		<div class="overlay"></div>

		<div class="container">
			<h1 class="entry-title">Contacto</h1>
		</div>

	</section>

<!-- Sub Page Content
	============================================= -->
	<div id="sub-page-content" class="clearfix">
		<div class="container">	
			<div class="row">
				<div class="col-md-12">			
					<h2 class="light bordered">Escríbenos un <span>Mensaje</span></h2>

					<!-- Contact Form
						============================================= -->
					<div class="contact-form clearfix">
						<div id="alert-contact" class="alert alert-success alert-dismissable fade in" style="display: none">
						 	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						  	<strong>¡Gracias por el Mensaje!</strong> Nos comunicaremos con usted.
						</div>

						<div id="alert-contact-d" class="alert alert-danger alert-dismissable fade in" style="display: none">
						 	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						  	<strong>¡Ha ocurrido un error con nuestro servidor!</strong> Intente más tarde.
						</div>
						
						<form name="contact_form" id="formContacto" action="#">
							<div class="row">
								<div id="gNombre" class="form-group col-md-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-user"></span>
										</div>
										<input type="text" id="nombreContacto" name="nombre" class="form-control" placeholder="Nombre y Apellídos" onKeyPress="removeChecksContact(1);">
									</div>
									<p id="nombreError" class="help-block text-danger" style="display: none;">Ingrese su nombre nompleto</p>
								</div>

								<div id="gCorreo" class="form-group col-md-6" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-envelope"></span>
										</div>
										<input type="email" name="mail" id="emailContacto" class="form-control" placeholder="Correo" onKeyPress="removeChecksContact(2);">
									</div>
									<p id="correoError" class="help-block text-danger" style="display: none;">Ingrese un correo válido</p>
								</div>

								<div id="gTitulo" class="form-group col-sm-12 funciona" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-pencil"></span>
										</div>
										<input type="text" id="tituloContacto" name="titulo" class="form-control" placeholder="Título" onKeyPress="removeChecksContact(3);"> 
									</div>
									<p id="tituloError" class="help-block text-danger" style="display: none;">Ingrese un título válido</p>
								</div>
								
								<div id="gMsj" class="form-group col-md-12" style="margin-bottom: 10px">
									<div class="input-group">
										<div class="input-group-addon">
											<span class="glyphicon glyphicon-edit"></span>
										</div>
										<textarea placeholder="Mensaje" name="msg" id="msgContacto" class="form-control" onKeyPress="removeChecksContact(4);"></textarea>
									</div>
									<p id="msjError" class="help-block text-danger" style="display: none;">Ingrese un mensaje válido</p>
								</div>
							</div>
							<a id="validaContacto" class="btn btn-default disabled">Enviar</a>
						</form>
					</div>
				</div>
			</div>	
		</div>
	</div>
	<!--<div id="carga" class="loader" style="display: none"></div>-->
<?php include "footer.php" ?>