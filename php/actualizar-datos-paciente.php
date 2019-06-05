<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        include_once "../../mysqli_connect.php";
        $erroresArray = array();//Arreglo para contener errores
        
        $password1 = trim($_POST['inputPasswordPaciente1']);
        $password2 = trim($_POST['inputPasswordPaciente2']);

        if($password1 != $password2){
            $erroresArray[] = 'La contraseña no coincide';
        }
        if(!empty($erroresArray)){
            echo "<p>Ocurrieron los siguientes errores: </br>";
            foreach($erroresArray as $valor){
                echo "$valor </br>\n";
            }
            echo "</p>";
            mysqli_close($conexion);
        }else{
             //Datos que se le pasaran al procedure
            $correo = 'sanma@algo.com';
            $telefono = trim($_POST['inputTelefonoPaciente']);
            
            $query = "call setNuevoPasswordTelefono('$password1', '$correo', '$telefono')";
            $resultado = mysqli_query($conexion, $query) or die (mysqli_error($conexion));
            mysqli_close($conexion);
            header('Location: ../perfil-paciente.php');
        }
    }
?>