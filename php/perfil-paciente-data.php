<?php
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        session_start();
        $correo = $_SESSION['correo'];
        
        include_once "../../mysqli_connect.php";
        $query = "call getDatosPaciente('$correo')";
        $resultado = mysqli_query($conexion, $query) or die (mysqli_error($conexion));
        $datos = array();
        if($resultado){
            $num = mysqli_num_rows($resultado);
            if($num > 0){
                $datos = mysqli_fetch_assoc($resultado);//Convertir la consulta en un arreglo clave valor
            }
        }
        mysqli_close($conexion);
        echo json_encode($datos);
    }
?>