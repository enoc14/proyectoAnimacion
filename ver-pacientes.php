<?php 
    session_start();
    if($_SESSION['tipo'] != 'doctor')
        header("Location:index.php");  
    $title = "Ver Pacientes";
    $nameDoctor = $_SESSION['nombre'];
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
        <div class="row" id="">
            <div id="myModal" class="modal">
            </div>
        </div>
    </div>
</div>
<!--end sub-page-content-->
<?php 
include('footer.php');
?>