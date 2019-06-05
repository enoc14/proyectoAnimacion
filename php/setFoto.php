<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $nombreFoto = $_FILES['foto']['name'];
        $ruta = $_FILES['foto']['tmp_name'];	// dirección temporal
        $rutaBD = "images/pacientes/".$nombreFoto;
        $nuevaRuta = "../images/pacientes/".$nombreFoto;
        $datos = array();
        $datos['nombreFoto'] = $nombreFoto;

        session_start();
        $correo = $_SESSION['correo'];

        include_once "../../mysqli_connect.php";
        $query = "call updateFoto('$rutaBD', '$correo')";
        $resultado = mysqli_query($conexion, $query) or die (mysqli_error($conexion));

        if($resultado){
            $datos['success'] = true;
            move_uploaded_file($ruta, $nuevaRuta);	// mover a nueva dirección
        } else
            $datos['success'] = false;

        mysqli_close($conexion);
        echo json_encode($datos);
    }
?>