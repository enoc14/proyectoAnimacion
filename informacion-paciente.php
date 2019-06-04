<?php
session_start();
if($_SESSION['tipo'] != 'paciente')
    header("Location:index.php");  
$namePaciente = $_SESSION['nombre'];
//$tipoPaciente = $_SESSION['tipo'];
//$emailPaciente = $_SESSION['correo'];
$title = "Informacion Paciente";
include('header-paciente.php');
?>
<script>
    window.name = "informacion-paciente";   
</script>
<!-- Sub Page Content
			============================================= -->
<div id="sub-page-content" class="clearfix margin-top-50">

	
    <!-- Services
				============================================= -->
    <section class="services-sec container" style="padding-top: 0px !important;">
				<h2 class="light bordered">ACERCA DE LAS <span>ACTIVIDADES</span></h2>
        

        <div class="service-box one">
            <span class="icon img-circle"><i class="fa fa-spinner"></i></span>
            <h4><a href="#.">Series de Colores</a></h4>
            <p>Mejora la atención del esquizofrénico con tareas simples que ayuden a reforzar la activación mental.</p>
        </div>

        <div class="service-box two">
            <span class="icon img-circle"><i class="fa fa-plus"></i></span>
            <h4><a href="#.">Operaciones Aritméticas</a></h4>
            <p>Potencia la memoria inmediata y refuerza la memoria reciente.</p>
        </div>

        <div class="service-box three">
            <span class="icon img-circle"><i class="fa fa-hand-o-up"></i></span>
            <h4><a href="#.">Relacionar sonido con imagen</a></h4>
            <p>Mejora la orientación espacial, temporal y de la persona.</p>
        </div>

    </section>

</div>
<!--end sub-page-content-->

<?php include "footer.php" ?>