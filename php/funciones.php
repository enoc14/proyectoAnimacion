<?php
    function getInfoUsuario($correo, $pass, $tipo){
        include_once "../mysqli_connect.php";

        if($tipo == 'paciente')
            $query = "CALL getSesionPaciente('$correo','$pass')";
        elseif ($tipo == 'doctor')
            $query = "CALL getSesionDoctor('$correo','$pass')";

        $resultado = mysqli_query($conexion, $query);
        $errorConsulta = true;
        $info = array();
        $info["errorDB"] = false;
        
        if($resultado){
            $num = mysqli_num_rows($resultado);
            if($num > 0){
                $errorConsulta = false;
                $info["errorConsulta"] = $errorConsulta;
                $info["data"] = mysqli_fetch_assoc($resultado);
            } else {
                $info["errorConsulta"] = $errorConsulta;
            }
        } else {
            $info["errorDB"] = true;
        }
        
        mysqli_close($conexion);

        return $info;
    }
?>