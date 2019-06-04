<?php 
    session_start();
    if($_SESSION['tipo'] != 'paciente')
        header("Location:index.php");  
    $namePaciente = $_SESSION['nombre'];
    //$tipoPaciente = $_SESSION['tipo'];
    //$emailPaciente = $_SESSION['correo'];
    $title = "Perfil Paciente";
    include('header-paciente.php');
?>
<script>
    window.name = "perfil-paciente"
</script>
<div id="sub-page-content" class="clearfix margin-top-30">
    <div class="container" style="padding-top: 25px;">
        <h2 class="light bordered main-title">Editar <span>Perfil</span></h2>
        <div class="row" id="divPerfil">
    </div>
</div>
<div id="sub-page-content" class="clearfix margin-top-30">
    <div class="container" style="padding-top: 25px;">
        <h2 class="light bordered main-title">Tus <span>Estadisticas</span></h2>
        <div class="row" id="divEstadisticas">
    </div>
</div>
<?php include "footer.php" ?>