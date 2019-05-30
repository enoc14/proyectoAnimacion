<?php
    require 'php/funciones.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $correo = trim($_POST['email_Sesion']);
        $pass = trim($_POST['pass_Sesion']);
        $tipo = trim($_POST['tipo_Sesion']);
        
        // Funcion para revisar si el usuario es doctor o paciente
        $info = getInfoUsuario($correo, $pass, $tipo);

        var_dump($info);
        
        if(!$info["errorDB"]){
            if(!$info['errorConsulta']){
                session_start();
                $_SESSION['correo'] = $correo;
                $keys = array_keys($info['data']);
                $_SESSION['nombre'] = $info['data'][$keys[0]];
                $_SESSION['tipo'] = $tipo;
            } else {
                echo '<script>alert("Lo sentimos, los datos ingresados no coinciden con nuestros registros\nIntente nuevamente")</script>';				
				echo "<script>location.href='registro.php'</script>";
            }
        } else {
            echo '<h2>¡Error del sistema!</h2>';
			echo '<p>Lo sentimos el servidor está en mantenimiento, intente más tarde</p>';
        }
    }
?>