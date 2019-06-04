<?php
    session_start();
    $paciente = $_SESSION['correo'];

    if($_SERVER['REQUEST_METHOD'] == 'GET'){

        $puntaje = $_GET['puntaje'];
        
        include_once "../../mysqli_connect.php";
        $query = "call insertar_Estadistica((select paciente.id_Paciente from paciente where paciente.correo_Usuario_Paciente = '$paciente'), $puntaje, 1)";
        $resultado = mysqli_query($conexion, $query) or die (mysqli_error($conexion));
        $datos = array();

        if($resultado)
            $datos["success"] = true;
        else
            $datos["success"] = false;

        mysqli_close($conexion);
        echo json_encode($datos);
    }

?>