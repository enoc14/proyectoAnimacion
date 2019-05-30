<?php
    session_start();
    if($_SESSION['tipo'] != 'doctor')
        header("Location:index.php");  

    $title = "Configuración";
    $nameDoctor = $_SESSION['nombre'];
    $tipoDoctor = $_SESSION['tipo'];
    $emailDoctor = $_SESSION['correo'];

    include('header-doctor.php');
?>
<script>
    window.name = "configuracion-doctor";
</script>

<div id="sub-page-content" class="clearfix margin-top-30">

    <div class="container" style="padding-top: 25px;">

        <h2 class="light bordered main-title">Cambiar <span>Contraseña</span></h2>

    </div>
</div>
<?php
    include('footer.php');
?>