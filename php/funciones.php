<?php

    function getInfoUsuario($correo, $pass){
        include_once "../../mysqli_connect.php";

        $query = "CALL getSesionDoctor('$correo','$pass')";
        $resultado = mysqli_query($conexion, $query);
        $error = true;
        $info = array();
        $info["error2"] = false;
        
        if($resultado){
            $num = mysqli_num_rows($resultado);
            if($num > 0){
                $error = false;
                $info["error"] = true;
                $info = mysqli_fetch_assoc($resultado);
            } else {
                $info["error"] = $error;
            }
        } else {
            $info["error2"] = true;
        }
        
        mysqli_close($conexion);

        return $info;
    }

    function imprime($string){
        return $string;
    }

?>