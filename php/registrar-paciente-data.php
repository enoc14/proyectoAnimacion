<?php
session_start();
$name_Doctor = $_SESSION['nombre'];
$email_Doctor = $_SESSION['correo'];
require 'funciones.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nombre = trim($_POST['nombre']);
    $fecha = trim($_POST['fecha']);
    $correo = trim($_POST['correo']);
    $telefono = trim($_POST['telefono']);
    $genero = trim($_POST['genero']);
    $datos = array();

    $data = insertarPaciente($nombre, $correo, $fecha, $telefono, $genero, $email_Doctor);

    if($data['success']){
        $datos['success'] = true;
        /*
        set_time_limit(300);
        require '../correo/php/class/emailForm.class.php';
        $pass = $data['pass'];

        $titulo = "Nueva cuenta de Terapia para la Esquizofrenia creada";
        $body = "El doctor <b>{$name_Doctor}</b> te dio de alta como su paciente<br>";
        $body .= "Tu correo es: <b>{$correo}</b>.<br>";
        $body .= "Tu contraseña es: <b>{$pass}</b>.<br>";
        $body -= "Al inciar sesión, te recomendamos cambiar tu foto y contraseña, ya que la contraseña es temporal.";
        
        $sendEmail = new emailForm();
        $emailResponse = $sendEmail->sendEmailForm($correo, $titulo, $body);
        
        if($emailResponse)
            $datos['enviado'] = true;
        else
            $datos['enviado'] = "Error, ponte en contacto con el administrador para enviar la contraseña";
        */
    } else
        $datos['success'] = false;

    echo json_encode($datos);
}

?>