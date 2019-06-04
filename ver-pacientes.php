<?php 
    session_start();
    if($_SESSION['tipo'] != 'doctor')
        header("Location:index.php");  
    $title = "Ver Pacientes";
    $nameDoctor = $_SESSION['nombre'];
<<<<<<< HEAD
    //$tipoDoctor = $_SESSION['tipo'];
    //$emailDoctor = $_SESSION['correo'];
=======

>>>>>>> 006dcde72bbbdc9eccc8c254af847f99fe3ad814
    include('header-doctor.php');
?>
<script>
    window.name = "ver-pacientes";   
</script>
<!-- Sub Page Content
			============================================= -->
<div id="sub-page-content" class="clearfix margin-top-30">
    <div class="container" style="padding-top: 25px;">
        <h2 class="light bordered main-title">Lista de <span>Pacientes</span></h2>
        <div class="row" id="divPacientes">
        </div>
    </div>
</div>
<!--end sub-page-content-->
<?php 
include('footer.php');
?>