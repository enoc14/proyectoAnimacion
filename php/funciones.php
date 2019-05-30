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

    function insertarPaciente($nombre, $correo, $fecha, $telefono, $genero){
        include_once "../mysqli_connect.php";

        $pass = $nombre[0]+$correo[4]+substr($telefono, 4, 8)+$genero[0]+$fecha[3];
        $query = "call insertar_Paciente((select doctor.id_Doctor from doctor where doctor.correo_Usuario_Doctor = $doctor), $nombre, $genero, $fecha, $telefono, $correo, 'hombre.png', $pass)";
        $resultado = mysqli_query($conexion, $query);
        $data = array();

        if($resultado){
            $data['success'] = true;
            $data['pass'] = $pass;
        } else
            $data['success'] = false;

        mysqli_close($conexion);
        return $data;
    }
?>