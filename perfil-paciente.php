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
        <form class="row" id="divPerfil" action="php/actualizar-datos-paciente.php" method="POST" name="formulario-perfilPaciente">
        
        </form>
    </div>
</div>
<div id="sub-page-content" class="clearfix">
    <div class="container" style="padding-top: 25px;">
        <h2 class="light bordered main-title">Tus <span>Estadisticas</span></h2>
        <div class="row">
            <div class="col-sm-7 col-sm-offset-2" id="divEstadisticas" style="height: 400px; margin-top: 10px;">

            </div>
        </div>
    </div>
</div>
<?php include "footer.php" ?>