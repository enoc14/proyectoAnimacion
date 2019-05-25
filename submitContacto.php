<?php 
	
	set_time_limit(300);
	require 'correo/php/class/emailForm.class.php';
	$data = array();

	$name = $_POST["nombre"];
	$correo = $_POST["correo"];
	$titulo = $_POST["titulo"];
	$msj = $_POST["mensaje"];
    $destinatario = "shanock.charras@gmail.com";
    $body  = "{$name} mandó un mensaje: <br>";
    $body .= "<b>{$titulo}.</b><br>";
    $body .= "${msj}<br>";
    $body .= "<b>Correo:</b> {$correo}";
    
    $sendEmail = new emailForm();
	$emailResponse = $sendEmail->sendEmailForm($destinatario, $titulo, $body);

	if($emailResponse)
		$data['success'] = true;
	else
		$data['success'] = false;

	echo json_encode($data);
?>