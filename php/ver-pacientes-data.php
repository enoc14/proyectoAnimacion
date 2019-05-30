<?php

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
        include_once "../../mysqli_connect.php";
        $query = "call getDataPacientes()";
        $resultado = mysqli_query($conexion, $query) or die (mysqli_error($conexion));
        $datos = array();

        if($resultado){
            $num = mysqli_num_rows($resultado);
            if($num > 0){
                $cont = 0;
                while($row = mysqli_fetch_assoc($resultado)){
                    $data = "data".$cont;
                    $datos[$data] = $row;
                    $cont++;
                }
            }
        }

        mysqli_close($conexion);
        echo json_encode($datos);
    }

?>