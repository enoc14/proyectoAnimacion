<?php
    require 'php/funciones.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $correo = trim($_POST['email_Sesion']);
        $pass = trim($_POST['pass_Sesion']);
        
        
        $info = getInfoUsuario($correo, $pass);

        var_dump($info);
        /*
        if(!$info['error2']){
            if(!$info['error']){
                echo $info['nombre_Doctor'];
            } else {
                echo '<script>alert("Lo sentimos, los datos ingresados no coinciden con nuestros registros\nIntente nuevamente")</script>';				
				echo "<script>location.href='registro.php'</script>";
            }
        } else {
            echo '<h2>¡Error del sistema!</h2>';
			echo '<p>Lo sentimos el servidor está en mantenimiento, intente más tarde</p>';
        }*/
    }

?>